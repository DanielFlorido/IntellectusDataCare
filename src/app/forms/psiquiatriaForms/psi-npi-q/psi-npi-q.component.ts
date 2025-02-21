import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-psi-npi-q',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-npi-q.component.html',
  styleUrl: './psi-npi-q.component.css'
})
export class PsiNpiQComponent {
  severityOptions = [
    { label: 'No', value: 0 },
    { label: 'Leve', value: 1 },
    { label: 'Moderado', value: 2 },
    { label: 'Severo', value: 3 }
  ];
  
  questions: Question[] = [
    {
      id: 'npi_informante',
      label: 'NPI informante',
      type: 'selectValue',
      optionsValue: [
        { label: 'Cónyuge', value: 1 },
        { label: 'Hijo(a)', value: 2 },
        { label: 'Otro (especifique)', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'delirios',
      label: 'Delirios: ¿cree el paciente que otras personas le están robando o que planean hacerle daño de alguna manera?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'alucinaciones',
      label: 'Alucinaciones: ¿actúa el paciente como si oyera voces? ¿Habla el paciente con personas que no están presentes?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'agitacion',
      label: 'Agitación o agresividad: ¿es el paciente terco o testarudo y resiste la ayuda de otros?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'depresion',
      label: 'Depresión o disforia: ¿actúa el paciente como si estuviera triste o con el ánimo bajo? ¿Llora?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'ansiedad',
      label: 'Ansiedad: ¿se molesta el paciente cuando se separa de usted? ¿Muestra otras señales de nerviosismo, como falta de aire, suspiros, incapacidad de relajarse o se siente excesivamente tenso?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'euforia',
      label: 'Euforia o exaltación: ¿parece el paciente sentirse demasiado bien o actúa excesivamente alegre?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'apatia',
      label: 'Apatía o indiferencia: ¿parece el paciente menos interesado en sus actividades habituales y en las actividades y planes de los demás?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'desinhibicion',
      label: 'Pérdida de la inhibición/desinhibición: ¿parece el paciente actuar impulsivamente? Por ejemplo, ¿habla el paciente con extraños como si los conociera o dice cosas que podrían herir los sentimientos de los demás?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'irritabilidad',
      label: 'Irritabilidad o labilidad: ¿se muestra el paciente irritable o se impacienta? ¿Tiene el paciente dificultad para lidiar con retrasos o esperar actividades planeadas?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'disturbio_motor',
      label: 'Disturbio motor: ¿lleva a cabo el paciente actividades repetitivas, como dar vueltas por la casa, jugar con botones, enrollar hilos o hacer otras cosas repetitivamente?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'conducta_nocturna',
      label: 'Conducta nocturna: ¿le despierta el paciente durante la noche, se levanta muy temprano por la mañana o toma demasiadas siestas durante el día?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'apetito_alimentacion',
      label: 'Apetito y alimentación: ¿ha perdido o aumentado de peso el paciente o ha habido algún cambio en la comida que le gusta?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    }
  ];
  onSubmit(data:FormGroup){
    console.log(data);
  }
}
