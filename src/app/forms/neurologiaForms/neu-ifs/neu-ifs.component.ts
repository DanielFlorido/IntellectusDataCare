import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-neu-ifs',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './neu-ifs.component.html',
  styleUrl: './neu-ifs.component.css'
})
export class NeuIfsComponent {
  ANSWER_OPTIONS1 = [
    { label: 'Seis series consecutivas solo', value: 3 },
    { label: 'Al menos 3 series consxecutivas solo', value: 2 },
    { label: 'El paciente falla en 1 pero logra 3 series consecutivas con el examinador', value: 2 },
    { label: 'El paciente no logra 3 series consecutivas con el examinador', value: 0 }
  ];
  ANSWER_OPTIONS2 = [
    { label: 'Sin errores', value: 3 },
    { label: 'uno o dos errores', value: 2 },
    { label: 'mas de dos errores', value: 1 },
    { label: 'El paciente golpea al examinador al menos 4 veces consecutivas', value: 0 }
  ];

  questions: Question[] = [
    {
      id: "1",
      label: "Series Motoras",
      type: "selectValue",
      optionsValue: this.ANSWER_OPTIONS1,
      validators: [Validators.required]
    },
    {
      id: "2",
      label: "Instrucciones conflictivas",
      type: "selectValue",
      optionsValue: this.ANSWER_OPTIONS2,
      validators: [Validators.required]
    },
    {
      id: "3",
      label: "Control Inhibidor Motor",
      type: "selectValue",
      optionsValue: this.ANSWER_OPTIONS2,
      validators: [Validators.required]
    }
  ];
  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
