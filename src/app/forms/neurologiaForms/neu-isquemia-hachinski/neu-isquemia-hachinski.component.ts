import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { FormularioComponent } from "../../formulario/formulario.component";

@Component({
  selector: 'app-neu-isquemia-hachinski',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './neu-isquemia-hachinski.component.html',
  styleUrl: './neu-isquemia-hachinski.component.css'
})
export class NeuIsquemiaHachinskiComponent {
  questions: Question[] = [
    { id: '1', label: '¿Comienzo súbito?', type: 'yesNo', validators: [Validators.required] },
    { id: '2', label: '¿Deterioro escalonado?', type: 'yesNo', validators: [Validators.required] },
    { id: '3', label: '¿Curso fluctuante?', type: 'yesNo', validators: [Validators.required] },
    { id: '4', label: '¿Confusión nocturna?', type: 'yesNo', validators: [Validators.required] },
    { id: '5', label: '¿Conservación relativa de la personalidad?', type: 'yesNo', validators: [Validators.required] },
    { id: '6', label: '¿Depresión?', type: 'yesNo', validators: [Validators.required] },
    { id: '7', label: '¿Síntomas somáticos?', type: 'yesNo', validators: [Validators.required] },
    { id: '8', label: '¿Labilidad emocional?', type: 'yesNo', validators: [Validators.required] },
    { id: '9', label: '¿Antecedente o presencia de hipertensión arterial sistémica?', type: 'yesNo', validators: [Validators.required] },
    { id: '10', label: '¿Antecedente de ictus o accidente cerebrovascular?', type: 'yesNo', validators: [Validators.required] },
    { id: '11', label: '¿Signos de ateroesclerosis?', type: 'yesNo', validators: [Validators.required] },
    { id: '12', label: '¿Síntomas neurológicos focales?', type: 'yesNo', validators: [Validators.required] },
    { id: '13', label: '¿Signos neurológicos focales?', type: 'yesNo', validators: [Validators.required] }
  ];
  onSubmit(data: FormGroup){
    console.log(data.value);
  }
}
