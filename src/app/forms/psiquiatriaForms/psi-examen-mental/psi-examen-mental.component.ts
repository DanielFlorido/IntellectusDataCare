import { Component } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormGroup, Validators } from '@angular/forms';
import { FormularioComponent } from '../../formulario/formulario.component';

@Component({
  selector: 'app-psi-examen-mental',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-examen-mental.component.html',
  styleUrl: './psi-examen-mental.component.css'
})
export class PsiExamenMentalComponent {
  questions: Question[] = [
    {
      "id": "1",
      "label": "Examen Mental",
      "type": "text",
      validators: [Validators.required]
    } 
  ];
  onSubmit(data :FormGroup) {
    console.log(data.value); 
  }

}
