
import { Component, inject, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/paciente/paciente.service';
import { PacienteListadoDto } from '../../interfaces/dtos/paciente-listado-dto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConsultaPacientesComponent } from "./consultaPacientes/consulta-pacientes/consulta-pacientes.component";
import { pacienteDto } from '../../interfaces/dtos/paciente-dto';


@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, ConsultaPacientesComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit {
  pacientes: PacienteListadoDto[] = [];
  pacienteSeleccionadoId: number | null = null;

  private pacienteService = inject(PacienteService);
  private router = inject(Router);

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacienteService.getPacientes().subscribe(data => {
      this.pacientes = data;
      console.log('Pacientes:', data);
    });
  }

  irACrearPaciente() {
    this.router.navigate(['/crear-paciente']);
  }

  seleccionarPaciente(paciente: PacienteListadoDto) {
    this.pacienteService.setPacienteActual(paciente);
    this.pacienteSeleccionadoId = paciente.id === this.pacienteSeleccionadoId ? null : paciente.id;
  }
}
