import { Component } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';
import { FormularioComponent } from "../../formulario/formulario.component";

@Component({
  selector: 'app-psi-gds',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-gds.component.html',
  styleUrl: './psi-gds.component.css'
})
export class PsiGdsComponent {

  YES_NO_OPTIONS = [
    { label: 'Sí', value: 1 },
    { label: 'No', value: 0 }
  ];

  questions: Question[] = [
    { id: 'q10', label: '¿Está usted básicamente satisfecho(a) con su vida?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q11', label: '¿Ha dejado muchas de sus actividades e intereses?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q12', label: '¿Siente que su vida está vacía?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q13', label: '¿Se aburre usted a menudo?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q14', label: '¿Está usted con buen ánimo la mayor parte del tiempo?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q15', label: '¿Teme que algo malo le va a pasar?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q16', label: '¿Se siente feliz la mayor parte del tiempo?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q17', label: '¿Siente con frecuencia que nada o nadie le puede ayudar?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q18', label: '¿Prefiere quedarse en su casa en vez de salir y hacer cosas nuevas?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q19', label: '¿Cree que tiene más problemas con su memoria que las demás personas?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q20', label: '¿Cree usted que es maravilloso estar vivo(a) en este momento?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q21', label: '¿Se siente inútil de la manera en que está en este momento?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q22', label: '¿Se siente lleno(a) de energía?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q23', label: '¿Siente que su situación no tiene remedio?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 },
    { id: 'q24', label: '¿Piensa que la mayoría de las personas están en mejores condiciones que usted?', type: 'selectValue', optionsValue: this.YES_NO_OPTIONS, value: 0 }
  ];

onSubmit(data:FormGroup){
  console.log(data.value);
}

}
