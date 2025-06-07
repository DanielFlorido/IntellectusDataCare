import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MedicosService } from '../../shared/medicos/medicos.service';
import { MedicoDTO } from '../../interfaces/dtos/medico-dto';

@Component({
  selector: 'app-medicos-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './medicos-selector.component.html',
  styleUrl: './medicos-selector.component.css'
})
export class MedicosSelectorComponent implements OnChanges{
  private fb = inject(FormBuilder);
  private service = inject(MedicosService);
  @Input() preseleccionados: MedicoDTO[] = [];
  medicos = signal<any[]>([]);
  forms = signal<FormGroup[]>([]);

  constructor() {
    this.service.obtenerMedicos().subscribe(this.medicos.set);
    this.agregarSelector(); // uno inicial
  }

  agregarSelector() {
    const control = this.fb.group({
      medico: [null]
    });
    this.forms.update(f => [...f, control]);
  }

  obtenerSeleccionados(): number[] {
    return this.forms().map(f => f.get('medico')?.value).filter(id => id != null);
  }

  eliminar(i: number) {
    const nuevo = [...this.forms()];
    nuevo.splice(i, 1);
    this.forms.set(nuevo);
  }
  ngOnChanges(changes: SimpleChanges): void {
  if (changes['preseleccionados'] && this.medicos().length > 0) {
      this.forms.set([]);

      for (const medico of this.preseleccionados) {
        const group = this.fb.group({
          medico: [medico.id]
        });
        this.forms.update(f => [...f, group]);
      }
    }
  }
}
