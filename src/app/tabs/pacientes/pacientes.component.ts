
import { Component, inject, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/paciente/paciente.service';
import { PacienteListadoDto } from '../../interfaces/dtos/paciente-listado-dto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
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

  seleccionarPaciente(id: number) {
    this.pacienteSeleccionadoId = id === this.pacienteSeleccionadoId ? null : id;
  }
}
