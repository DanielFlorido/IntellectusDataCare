import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { tap, switchMap, filter } from 'rxjs';
import { TrasntornosService } from '../../shared/trasntornos/trasntornos.service';
import { CommonModule } from '@angular/common';
import { SeleccionTrastornoDTO } from '../../interfaces/dtos/seleccion-trastorno-dto';

@Component({
  selector: 'app-trasntornos-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './trasntornos-selector.component.html',
  styleUrl: './trasntornos-selector.component.css'
})
export class TrasntornosSelectorComponent implements OnChanges {

  private fb = inject(FormBuilder);
  private service = inject(TrasntornosService);

  form = this.fb.group({
  tipoTrastorno: this.fb.control<number | null>(null),
  transtornoGeneral: this.fb.control<number | null>(null),
  transtornoEspecifico: this.fb.control<number | null>(null),
  });

  transtornos = signal<any[]>([]);
  transtornosGenerales = signal<any[]>([]);
  transtornosEspecificos = signal<any[]>([]);

  @Output() agregar = new EventEmitter<any>();

  @Input() preseleccion: SeleccionTrastornoDTO | null = null;
  constructor() {   
    this.service.obtenerTranstornos().subscribe(this.transtornos.set);   
    this.form.get('tipoTrastorno')?.valueChanges.pipe(
      tap(() => {
        this.form.get('transtornoGeneral')?.reset();
        this.form.get('transtornoEspecifico')?.reset();
        this.transtornosGenerales.set([]);
        this.transtornosEspecificos.set([]);
      }),
      filter((id): id is number => id !== null),
      switchMap(id => this.service.obtenerTranstornosGeneral(id))
    ).subscribe(this.transtornosGenerales.set);

    this.form.get('transtornoGeneral')?.valueChanges.pipe(
      tap(() => this.form.get('transtornoEspecifico')?.reset()),
      filter((id): id is number => id !== null),
      switchMap(id => this.service.obtenerTranstornosEspecificos(id))
    ).subscribe(this.transtornosEspecificos.set);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['preseleccion']?.currentValue && this.preseleccion) {
      console.log('Preselección lista:', this.preseleccion);
      const { transtornoId, transtornoGeneralId, transtornoEspecificoId } = this.preseleccion!;
      this.form.patchValue({ tipoTrastorno: transtornoId }, { emitEvent: false });

      this.service.obtenerTranstornosGeneral(transtornoId).subscribe(generales => {
        this.transtornosGenerales.set(generales);
        this.form.patchValue({ transtornoGeneral: transtornoGeneralId }, { emitEvent: false });

        this.service.obtenerTranstornosEspecificos(transtornoGeneralId).subscribe(especificos => {
          this.transtornosEspecificos.set(especificos);
          this.form.patchValue({ transtornoEspecifico: transtornoEspecificoId }, { emitEvent: false });
          this.onAgregarTrastorno();
        });
      });
    }
  }


  onAgregarTrastorno() {
    const id = this.form.get('transtornoEspecifico')?.value;
    const trastorno = this.transtornosEspecificos().find(t => t.id === id);
    if (trastorno) {
      this.agregar.emit(trastorno);
    }
  }

}
