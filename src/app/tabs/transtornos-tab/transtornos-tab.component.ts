import { Component, inject, OnInit, signal } from '@angular/core';
import { TrasntornosSelectorComponent } from "../../forms/trasntornosSelector/trasntornos-selector.component";
import { TrasntornosService } from '../../shared/trasntornos/trasntornos.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';
import { CommonModule } from '@angular/common';
import { SeleccionTrastornoDTO } from '../../interfaces/dtos/seleccion-trastorno-dto';

@Component({
  selector: 'app-transtornos-tab',
  standalone: true,
  imports: [TrasntornosSelectorComponent, CommonModule],
  templateUrl: './transtornos-tab.component.html',
  styleUrl: './transtornos-tab.component.css'
})
export class TranstornosTabComponent implements OnInit{
  private service = inject(TrasntornosService);
  private serviceCategoria = inject(ConsultaService);
  private consulta = this.serviceCategoria.getConsultaActualSync();
  seleccionados = signal<any[]>([]);
  selecciones = signal<SeleccionTrastornoDTO[]>([]);

  ngOnInit(): void {
    if(this.consulta){
      this.service.obtenerSeleccionTrastorno(this.consulta.id).subscribe(this.selecciones.set);
    }
  }

  onAgregarTrastorno(trastorno: any) {
    const yaExiste = this.seleccionados().some(t => t.transtornoId === trastorno.id);
    
    if (!yaExiste) {
      this.seleccionados.update(arr => [...arr, trastorno]);
    }
  }

  guardar() {
    const ids = this.seleccionados().map(t => t.id ?? t.transtornoEspecificoId);
    if(this.consulta){
      this.service.sincronizarTrastornoEspecificoConsulta(this.consulta.id, ids).subscribe({
        next: (res) => {
          console.log('Guardado exitosamente:', res);
          alert('Sincronización exitosa.');
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Error al sincronizar los trastornos.');
        }
      });
    }
    
  }
}
