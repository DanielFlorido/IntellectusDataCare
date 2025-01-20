import { Component } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';
import { FormularioComponent } from "../../formulario/formulario.component";

@Component({
  selector: 'app-psi-phq-9',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-phq-9.component.html',
  styleUrl: './psi-phq-9.component.css'
})
export class PsiPhq9Component {

  FREQUENCY_OPTIONS = [
    { label: 'Nunca', value: 0 },
    { label: 'Varios días', value: 1 },
    { label: 'Más de la mitad de los días', value: 2 },
    { label: 'Casi todos los días', value: 3 }
  ];

  // Lista de preguntas
  questions: Question[] = [
    { id: 'q25', label: 'Poco interés o placer en hacer las cosas', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q26', label: 'Sentirse desanimado(a), deprimido(a) o sin esperanzas', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q27', label: 'Problemas para dormir o mantener el sueño o dormir demasiado', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q28', label: 'Sentirse cansado(a) o con poca energía', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q29', label: 'Sentir poco apetito o comer en exceso', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q30', label: 'Sentirse mal consigo mismo o tener un sentimiento de fracaso', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q31', label: 'Dificultad para concentrarse en diferentes actividades tales como leer el periódico o ver televisión', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q32', label: 'Moverse o hablar tan despacio que otras personas lo han notado', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 },
    { id: 'q33', label: 'Pensamientos acerca de que sería mejor estar muerto(a)', type: 'selectValue', optionsValue: this.FREQUENCY_OPTIONS, value: 0 }
  ];

  onSubmit(data: FormGroup) {
    console.log(data.value);
  }

}
