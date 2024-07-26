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
  onSubmit(){
    console.log(this.informacionGeneral);
  };
}

