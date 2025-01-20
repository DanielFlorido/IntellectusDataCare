import { Component } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valoracion-social',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './valoracion-social.component.html',
  styleUrl: './valoracion-social.component.css'
})
export class ValoracionSocialComponent {
  YES_NO_OPTIONS = [
    { label: 'Sí', value: 1 },
    { label: 'No', value: 0 }
  ];
  
  SUPPORT_NETWORK_OPTIONS = [
    { label: 'Presente', value: 1 },
    { label: 'Limitada', value: 0 }
  ];
  
  // Lista de preguntas
  questions: Question[] = [
    {
      id: 'q7',
      label: 'Institucionalizado *',
      type: 'selectValue',
      optionsValue: this.YES_NO_OPTIONS,
      value: 0
    },
    {
      id: 'q8',
      label: 'Red de apoyo *',
      type: 'selectValue',
      optionsValue: this.SUPPORT_NETWORK_OPTIONS,
      value: 0
    },
    {
      id: 'q9',
      label: 'Ingreso mensual fijo *',
      type: 'selectValue',
      optionsValue: this.YES_NO_OPTIONS,
      value: 0
    }
  ];
  onSubmit(data:FormGroup){
    console.log(data.value);
  }
}
