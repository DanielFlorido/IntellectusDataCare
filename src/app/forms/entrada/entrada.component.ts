import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InformacionGeneral } from '../../interfaces/informacion-general';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent {
  informacionGeneral: InformacionGeneral= {
    numeroAtencion: '0',
    cedula: '***********',
    nombre: 'prueba',
    fechaNacimiento: new Date,
    anosEscolaridad: 10000,
    fechaEvaluacion1: new Date,
    edad: 10,
    lateralidad: '*****',
    telefonoPaciente: '*******',
    telefonoAcompanante: '*****',
    emailContacto: '*******',
    ocupacionPrevia: '******',
    ocupacionActual: '*******',
    ocupacionMayorTiempo: '********',
    ciudad: '*******',
    lugarVivienda: '********',
    informanteCuidador: '*****',
    parentesco: '*******',
    aseguradora: '********',
    remite: '********',
    longitudinal: true
  }
  onSubmit(form: NgForm) {
    this.informacionGeneral = {
      numeroAtencion: form.value.numeroAtencion,
      cedula: form.value.cedula,
      nombre: form.value.nombre,
      fechaNacimiento: form.value.fechaNacimiento,
      anosEscolaridad: form.value.anosEscolaridad,
      fechaEvaluacion1: form.value.fechaEvaluacion1,
      edad: form.value.edad,
      lateralidad: form.value.lateralidad,
      telefonoPaciente: form.value.telefonoPaciente,
      telefonoAcompanante: form.value.telefonoAcompanante,
      emailContacto: form.value.emailContacto,
      ocupacionPrevia: form.value.ocupacionPrevia,
      ocupacionActual: form.value.ocupacionActual,
      ocupacionMayorTiempo: form.value.ocupacionMayorTiempo,
      ciudad: form.value.ciudad,
      lugarVivienda: form.value.lugarVivienda,
      informanteCuidador: form.value.informanteCuidador,
      parentesco: form.value.parentesco,
      aseguradora: form.value.aseguradora,
      remite: form.value.remite,
      longitudinal: form.value.longitudinal
    };

    console.log(this.informacionGeneral);
  };
}

