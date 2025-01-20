import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mna-sf',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './mna-sf.component.html',
  styleUrl: './mna-sf.component.css'
})
export class MnaSfComponent {
  APPETITE_OPTIONS = [
    { label: 'Ha comido mucho menos', value: 0 },
    { label: 'Ha comido menos', value: 1 },
    { label: 'Ha comido igual', value: 2 }
  ];

  WEIGHT_LOSS_OPTIONS = [
    { label: 'Pérdida de peso > 3 kg', value: 0 },
    { label: 'No lo sabe', value: 1 },
    { label: 'Pérdida de peso entre 1 y 3 kg', value: 2 },
    { label: 'No ha habido pérdida de peso', value: 3 }
  ];

  MOBILITY_OPTIONS = [
    { label: 'De la cama al sillón', value: 0 },
    { label: 'Autonomía en el interior', value: 1 },
    { label: 'Sale del domicilio', value: 2 }
  ];

  STRESS_OPTIONS = [
    { label: 'Sí', value: 0 },
    { label: 'No', value: 2 }
  ];

  NEUROPSYCHOLOGICAL_OPTIONS = [
    { label: 'Demencia o depresión grave', value: 0 },
    { label: 'Demencia leve', value: 1 },
    { label: 'Sin problemas psicológicos', value: 2 }
  ];

  BMI_OPTIONS = [
    { label: 'IMC < 19', value: 0 },
    { label: '19 ≤ IMC < 21', value: 1 },
    { label: '21 ≤ IMC < 23', value: 2 },
    { label: 'IMC ≥ 23', value: 3 }
  ];


  questions: Question[] = [
    {
      id: 'q1',
      label: 'Ha comido menos por falta de apetito, problemas digestivos, dificultades de masticación o deglución',
      type: 'selectValue',
      optionsValue: this.APPETITE_OPTIONS,
      value: 0
    },
    {
      id: 'q2',
      label: 'Pérdida reciente de peso (<3 meses)',
      type: 'selectValue',
      optionsValue: this.WEIGHT_LOSS_OPTIONS,
      value: 0
    },
    {
      id: 'q3',
      label: 'Movilidad',
      type: 'selectValue',
      optionsValue: this.MOBILITY_OPTIONS,
      value: 0
    },
    {
      id: 'q4',
      label: 'Ha tenido una enfermedad aguda o situación de estrés psicológico en los últimos 3 meses?',
      type: 'selectValue',
      optionsValue: this.STRESS_OPTIONS,
      value: 0
    },
    {
      id: 'q5',
      label: 'Problemas neuropsicológicos',
      type: 'selectValue',
      optionsValue: this.NEUROPSYCHOLOGICAL_OPTIONS,
      value: 0
    },
    //esta hay que arreglarlar :C 
    
    {
      id: 'q6',
      label: 'Índice de masa corporal (IMC) = peso en kg / (talla en m)²',
      type: 'selectValue',
      optionsValue: this.BMI_OPTIONS,
      value: 0
    }
  ];
  onSubmit(data:FormGroup){
    console.log(data.value);
  }
}
