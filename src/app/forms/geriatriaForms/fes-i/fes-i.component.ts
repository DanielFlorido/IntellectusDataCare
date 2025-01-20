import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fes-i',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './fes-i.component.html',
  styleUrl: './fes-i.component.css'
})
export class FesIComponent {
  ANSWER_OPTIONS = [
    { label: 'En absoluto', value: 1 },
    { label: 'Algo', value: 2 },
    { label: 'Bastante', value: 3 },
    { label: 'Mucho', value: 4 }
  ];
  
  
  questions: Question[] = [
    {
      id: 'q1',
      label: 'Limpiar la casa (ej., barrer, pasar la aspiradora o limpiar el polvo)',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 1
    },
    {
      id: 'q2',
      label: 'Vestirse o desvestirse',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q3',
      label: 'Preparar comidas cada día',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q4',
      label: 'Bañarse o ducharse',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q5',
      label: 'Ir a la compra',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q6',
      label: 'Sentarse o levantarse de una silla',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q7',
      label: 'Subir o bajar escaleras',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q8',
      label: 'Caminar por el barrio (o vecindad, fuera de casa)',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q9',
      label: 'Coger algo alto (por encima de su cabeza) o en el suelo',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q10',
      label: 'Ir a contestar el teléfono antes de que deje de sonar',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q11',
      label: 'Caminar sobre una superficie resbaladiza (ej., mojada o con hielo)',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q12',
      label: 'Visitar a un amigo o familiar',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q13',
      label: 'Caminar en un lugar con mucha gente',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q14',
      label: 'Caminar en una superficie irregular (ej., pavimento en mal estado, sin asfaltar)',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q15',
      label: 'Subir y bajar una rampa',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    },
    {
      id: 'q16',
      label: 'Salir a un evento social (por ejemplo, religioso, reunión familiar o reunión social)',
      type: 'selectValue',
      optionsValue: this.ANSWER_OPTIONS,
      value: 0
    }
  ];
  onSubmit(data: FormGroup){
    console.log(data.value);
  }
}
