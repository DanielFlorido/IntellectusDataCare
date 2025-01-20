import { Question } from './../../../interfaces/question';
import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-qsm-f',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './qsm-f.component.html',
  styleUrl: './qsm-f.component.css'
})
export class QSMFComponent {
  optionsValue=[
    { label: 'Nunca', value: 0 },
    { label: 'Rara vez', value: 1 },
    { label: 'A veces', value: 2 },
    { label: 'Casi siempre', value: 3 }
  ];
  questions: Question[]=[
    {
      id: 'q1',
      label: '¿Tiene dificultad para recordar eventos de la actualidad reciente?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 0
    },
    {
      id: 'q2',
      label: '¿Tiene dificultad para seguir una película, emisión de TV o libro?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 1
    },
    {
      id: 'q3',
      label: '¿Le ha sucedido por ejemplo que entre a una pieza y olvide lo que venía a buscar?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 2
    },
    {
      id: 'q4',
      label: '¿Olvida hacer cosas importantes que había previsto o debía hacer? (p.ej. pagar una factura, cumplir una cita o una invitación, etc.)',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q5',
      label: '¿Tiene dificultad para recordar números de teléfonos conocidos?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q6',
      label: '¿Olvida con frecuencia el nombre o apellido de personas conocidas?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q7',
      label: '¿Se ha perdido en lugares familiares?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q8',
      label: '¿Tiene dificultad para encontrar objetos colocados en los lugares habituales?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q9',
      label: '¿Le ha sucedido que olvide cosas como apagar la estufa, cerrar con llave, etc.?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q10',
      label: '¿Repite varias veces lo mismo, porque olvida haberlo dicho?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q11',
      label: '¿Tiene dificultad para encontrar nombres de personas o lugares?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q12',
      label: '¿Tiene dificultad para aprender cosas nuevas?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q13',
      label: '¿Necesita anotar todo?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q14',
      label: '¿Se le pierden las cosas?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q15',
      label: '¿Olvida inmediatamente lo que le acaban de decir?',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    }
  ];

  onSubmit(data: FormGroup){
    console.log(data.value)
  }
}
