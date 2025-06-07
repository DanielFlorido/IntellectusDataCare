import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ConsultaService } from '../../shared/consulta/consulta.service';
import { MedicosService } from '../../shared/medicos/medicos.service';
import { MedicosSelectorComponent } from '../../forms/medicos-selector/medicos-selector.component';
import { MedicoDTO } from '../../interfaces/dtos/medico-dto';

@Component({
  selector: 'app-medicos-tab',
  standalone: true,
  imports: [MedicosSelectorComponent],
  templateUrl: './medicos-tab.component.html',
  styleUrl: './medicos-tab.component.css'
})
export class MedicosTabComponent implements OnInit {
  
  private servicio = inject(MedicosService);
  private consultaSrv = inject(ConsultaService);
  private consulta = this.consultaSrv.getConsultaActualSync();

  medicosGuardados = signal<MedicoDTO[]>([]);

  ngOnInit(): void {
    if (this.consulta) {
      this.servicio.obtenerMedicosDeConsulta(this.consulta.id).subscribe(this.medicosGuardados.set);
    }
  }

  guardarMedicos(ids: number[]) {
    if (this.consulta) {
      this.servicio.sincronizarMedicosConsulta(this.consulta.id, ids).subscribe({
        next: () => alert('Médicos sincronizados'),
        error: () => alert('Error al sincronizar médicos')
      });
    }
  }

}
