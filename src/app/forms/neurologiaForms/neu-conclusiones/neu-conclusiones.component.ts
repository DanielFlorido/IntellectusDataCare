import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup } from '@angular/forms';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-neu-conclusiones',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './neu-conclusiones.component.html',
  styleUrl: './neu-conclusiones.component.css'
})
export class NeuConclusionesComponent {
  questions: Question[] = [
    { id: '1', label: 'Latencia de los movimientos oculares', type: 'selectValue', optionsValue: [
        { label: 'Normal', value: 'sin alteración en la latencia' },
        { label: 'Prolongada', value: 'con latencia prolongada de los movimientos oculares”' }
    ] },
    { id: '2', label: 'Seguimiento lento', type: 'selectValue', optionsValue: [
        { label: 'Normal', value: 'Con seguimiento lento normal' },
        { label: 'Sacadización', value: 'con sacadización ocular' }
    ] },
    { id: '3', label: 'Limitación de la mirada conjugada', type: 'select', options: 
      ['Limitación de la mirada conjugada vertical hacia arriba',
        'Limitación de la mirada conjugada vertical hacia abajo',
        'Limitación en la mirada horizontal',
        '	Sin limitación en la mirada conjugada'
      ] },
    { id: '4', label: 'Sacadas', type: 'select', options: ['Normales','Hipométricas','Hipermétricas','Hipométricas e hiperméticas'] },
    { id: '5', label: 'Otra', type: 'yesNo' },
    { id: '6', label: 'Especifique', type: 'text' },
    { id: '7', label: 'Bradiquinesia', type: 'yesNo' },
    { id: '8', label: 'Rigidez', type: 'yesNo' },
    { id: '9', label: 'Temblor', type: 'yesNo' },
    { id: '10', label: 'Mal control postural', type: 'yesNo' },
    { id: '11', label: 'Inestabilidad para la marcha', type: 'yesNo' },
    { id: '12', label: 'Apraxia cinética', type: 'yesNo' },
    { id: '13', label: 'Apraxia ideacional/ideomotora', type: 'yesNo' },
    { id: '14', label: 'Apraxia de la marcha', type: 'yesNo' },
    { id: '15', label: 'Glabelar', type: 'yesNo' },
    { id: '16', label: 'Palmomentoniano', type: 'yesNo' },
    { id: '17', label: 'Trompa', type: 'yesNo' },
    { id: '18', label: 'Búsqueda', type: 'yesNo' }
];
onSubmit(data: FormGroup) {
    console.log(data.value);
  }
}
