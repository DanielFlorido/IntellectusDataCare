import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { FormularioComponent } from "../../formulario/formulario.component";

@Component({
  selector: 'app-psi-gad-7',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-gad-7.component.html',
  styleUrl: './psi-gad-7.component.css'
})
export class PsiGad7Component {
  questions : Question[] = [
    {
      id: 'q1',
      label: 'Sentirse nervioso(a), ansioso(a), o inquieto?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q2',
      label: 'No poder parar o controlar la preocupación?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q3',
      label: 'Preocuparse mucho sobre diferentes cosas?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q4',
      label: 'Tener problemas para relajarse?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q5',
      label: 'Sentirse tan agitado que no se puede sentar quieto(a)?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q6',
      label: 'Enojarse o molestarse muy fácilmente?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    },
    {
      id: 'q7',
      label: 'Sentirse con miedo, como si algo muy malo fuera a suceder?',
      type: 'selectValue',
      optionsValue: [
        { label: 'Nunca', value: 0 },
        { label: 'Varios días', value: 1 },
        { label: 'Más de la mitad de los días', value: 2 },
        { label: 'Casi todos los días', value: 3 }
      ],
      validators: [Validators.required]
    }
  ];
  onSubmit(data: FormGroup) {
    console.log(data.value);
  }
}
