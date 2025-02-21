import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { FormularioComponent } from '../../formulario/formulario.component';

@Component({
  selector: 'app-psi-mild-behaviorial',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-mild-behaviorial.component.html',
  styleUrl: './psi-mild-behaviorial.component.css'
})
export class PsiMildBehaviorialComponent {
  answerOptions = [
    { label: 'No', value: 0 },
    { label: 'Leve', value: 1 },
    { label: 'Moderado', value: 2 },
    { label: 'Grave', value: 3 }
  ];
  
  questions: Question[] = [
    { id: '1', label: '¿La persona ha perdido interés en los amigos, la familia o en las actividades caseras?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '2', label: '¿Carece de curiosidad en temas que antes le atraían?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '3', label: '¿La persona se ha hecho menos espontánea y activa? Por ejemplo, ¿Tiende menos a iniciar o mantener una conversación?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '4', label: '¿Ha perdido la motivación para realizar sus obligaciones o intereses?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '5', label: '¿La persona es menos afectuosa y/o carente de emociones en comparación a como era habitualmente?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '6', label: '¿A esta persona ya no le importa nada?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '7', label: '¿La persona ha desarrollado tristeza o parece baja de ánimo? ¿Tiene episodios de llanto?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '8', label: '¿Es menos capaz de experimentar placer?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '9', label: '¿La persona se ha desanimado respecto a su futuro o siente que es un fracaso?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '10', label: '¿La persona se ve a sí misma como una carga para la familia?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '11', label: '¿La persona se ha hecho más ansiosa o preocupada por cosas rutinarias (ej. Acontecimientos, visitas, etc.)?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '12', label: '¿La persona se siente muy tensa, ha desarrollado incapacidad para relajarse, está inquieta o tiene síntomas de angustia?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '13', label: '¿La persona se agita, se ha hecho agresiva, irritable o temperamental?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '14', label: '¿La persona se ha hecho irrazonablemente o atípicamente discutidora?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '15', label: '¿La persona se ha hecho más impulsiva y parece que actúa sin tomar en consideración las cosas?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '16', label: '¿Muestra un comportamiento sexualmente desinhibido o invasivo, como tocar (a sí mismo o a otros), abrazar, tentar, etc. de una manera que no le es característica o que puede ofender?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '17', label: '¿La persona se ha hecho más fácilmente frustrada o impaciente? ¿Tiene problemas para sobrellevar los retrasos, esperar sucesos o que le llegue su turno?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '18', label: '¿Muestra ahora imprudencia o falta de juicio al conducir (ej. Dar acelerones, virajes erráticos, cambios de carril bruscos, etc.)?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '19', label: '¿La persona se ha hecho más tozuda o rígida, ej. Insiste inusualmente en llevar razón o es incapaz de ver/escuchar los puntos de vista de los demás?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '20', label: '¿Ha habido un cambio en su comportamiento alimentario (ej. Comer en exceso, con la boca demasiado llena, insistir en comer solo determinadas comidas, o comer la comida exactamente en el mismo orden?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '21', label: '¿La persona se preocupa menos de cómo sus palabras o acciones afectan a los demás? ¿Se ha hecho insensible a los sentimientos de los demás?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '22', label: '¿Ha desarrollado creencias de que está en peligro o que otros están planeando hacerle daño o robar sus pertenencias?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] },
    { id: '23', label: '¿Refiere, se queja o se comporta como si viera cosas (ej. Gente, animales o insectos) que no están presentes, es decir que son imaginarios para los demás?', type: 'selectValue', optionsValue: this.answerOptions, validators: [Validators.required] }
  ];
  onSubmit(data :FormGroup) {
    console.log(data.value); 
  }
}
