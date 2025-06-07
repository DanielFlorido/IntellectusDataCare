import { PacienteService } from './../../../../shared/paciente/paciente.service';
import { Component, inject, Input } from '@angular/core';
import { ConsultaDto } from '../../../../interfaces/dtos/consulta-dto';
import { ConsultaService } from '../../../../shared/consulta/consulta.service';
import { CommonModule } from '@angular/common';
import { PacienteListadoDto } from '../../../../interfaces/dtos/paciente-listado-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-pacientes.component.html',
  styleUrl: './consulta-pacientes.component.css'
})
export class ConsultaPacientesComponent {


  @Input() paciente!: PacienteListadoDto;
  private pacienteService = inject(PacienteService);
  consultas: ConsultaDto[] = [];
  private router = inject(Router);
  private consultaService = inject(ConsultaService);
  ngOnInit(): void {
    if (this.paciente) {
      this.consultaService.getConsultasPorPaciente(this.paciente.id).subscribe(data => {
        this.consultas = data;

      });
    }
  }
  irACrearConsulta() {
    if (!this.paciente) {
      console.error('Paciente no definido');
      return;
    }
    this.pacienteService.setPacienteActual(this.paciente);
    this.consultaService.crearConsulta(this.paciente.id).subscribe({
      next: (resp) => {
        console.log('Consulta creada:', resp);
        const consulta = {
          id: resp.id,
          fecha: ''
        }
        this.consultaService.setConsultaActual(consulta);
        this.router.navigate(['/consulta']);
      },
      error: (err) => {
        console.error('Error al crear consulta:', err);
      }
    });
  }
  seleccionarConsulta(consulta: ConsultaDto) {
    if (!this.paciente) {
      console.error('Paciente no definido');
      return;
    }
    this.pacienteService.setPacienteActual(this.paciente);
    this.consultaService.setConsultaActual(consulta);
    this.router.navigate(['/consulta']);
  }
}
