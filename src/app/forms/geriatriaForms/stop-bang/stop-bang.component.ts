import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stop-bang',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './stop-bang.component.html',
  styleUrl: './stop-bang.component.css'
})
export class StopBangComponent {
  STOP_BANG_OPTIONS = [
    { label: 'Sí', value: 1 },
    { label: 'No', value: 0 }
  ];
  
  
  questions: Question[] = [
    {
      id: 'q1',
      label: '¿Usted ronca duro? (lo suficiente para ser escuchado a través de una puerta cerrada)',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q2',
      label: '¿Usted se siente frecuentemente cansado, fatigado o somnoliento durante el día?',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q3',
      label: '¿Hay alguien que lo haya observado detener su respiración mientras duerme?',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 1
    },
    {
      id: 'q4',
      label: '¿Usted tiene o está en tratamiento para la hipertensión arterial?',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q5',
      label: 'IMC mayor a 35 kg/m²',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q6',
      label: 'Mayor a 50 años',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q7',
      label: 'Circunferencia de cuello mayor a 40 cm',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    },
    {
      id: 'q8',
      label: 'Es hombre',
      type: 'selectValue',
      optionsValue: this.STOP_BANG_OPTIONS,
      value: 0
    }
  ];
  onSubmit(data: FormGroup){
    console.log(data.value);
  }
}
