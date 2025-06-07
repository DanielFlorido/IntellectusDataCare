import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from '../../../../shared/paciente/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-paciente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-paciente.component.html',
  styleUrl: './crear-paciente.component.css'
})
export class CrearPacienteComponent {
  form: FormGroup;
  private router = inject(Router);
  
  constructor(private fb: FormBuilder, private pacienteService: PacienteService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      lateralidad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.pacienteService.crearPaciente(this.form.value).subscribe({
        next: (response) => {
          console.log('Paciente creado exitosamente:', response);
          this.router.navigate(['/pacientes']); // Redirigir a la lista de pacientes después de crear uno nuevo
        },
        error: (error) => {
          console.error('Error creando paciente:', error);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
