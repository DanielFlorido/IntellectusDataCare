import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-neu-form-1',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './neu-form-1.component.html',
  styleUrl: './neu-form-1.component.css'
})
export class NeuForm1Component {
  questions: Question[] = [
    { id: '1', label: 'MMSE', type: 'number', validators: [Validators.required, Validators.min(0), Validators.max(30)] },
    { id: '2', label: 'MOCA', type: 'number', validators: [Validators.required, Validators.min(0), Validators.max(30)] },
    { id: '3', label: 'Figura del reloj', type: 'number', validators: [Validators.required,Validators.min(0), Validators.max(9)] },
    { id: '4', label: 'CDR', type: 'number', validators: [Validators.required,Validators.min(0), Validators.max(3)] }
  ];
  onSubmit(data: FormGroup) {
    console.log(data.value);
  }
}
