import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IDP, IDPForm } from '../../interfaces/identificacion-paciente';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-informacion-pacienteform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './informacion-pacienteform.component.html',
  styleUrl: './informacion-pacienteform.component.css'
})
export class InformacionPacienteformComponent implements OnInit {
  pacienteForm!: FormGroup;
  ngOnInit(): void {
    this.pacienteForm = IDPForm.createForm();
  }
  onSubmit() {
    if (this.pacienteForm.valid) {
      const paciente: IDP = IDPForm.getPacienteFromForm(this.pacienteForm);
      console.log(paciente);
    }
  }
}
