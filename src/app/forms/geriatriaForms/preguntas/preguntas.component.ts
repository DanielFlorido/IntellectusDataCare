import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {
  questions: Question[] = [
    {
      id: 'caidas',
      label: 'Caídas',
      type: 'yesNo',
      validators: [Validators.required]
    },
    {
      id: 'incontinencia',
      label: 'Incontinencia',
      type: 'select',
      options: ['Urinaria', 'Fecal', 'Doble', 'Ninguna'],
      validators: [Validators.required]
    },
    {
      id: 'privacionSensorial',
      label: 'Privación sensorial',
      type: 'yesNo',
      validators: [Validators.required]
    },
    {
      id: 'especifiquePrivacion',
      label: 'Especifique',
      type: 'select',
      options: ['Visual', 'Auditiva', 'Visual y auditiva', 'Sin alteración'],
      validators: [Validators.required]
    },
    {
      id: 'tratada',
      label: 'Tratada',
      type: 'select',
      options: ['Sí', 'No', 'Sin alteración'],
      validators: [Validators.required]
    }
  ];
  
  onSubmit(data: FormGroup){
    console.log(data.value);
  }
}
