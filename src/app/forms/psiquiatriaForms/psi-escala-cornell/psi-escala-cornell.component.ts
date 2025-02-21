import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-psi-escala-cornell',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './psi-escala-cornell.component.html',
  styleUrl: './psi-escala-cornell.component.css'
})
export class PsiEscalaCornellComponent {
  severityOptions = [
    { label: 'No', value: 0 },
    { label: 'Leve', value: 1 },
    { label: 'Moderado', value: 2 },
    { label: 'Severo', value: 3 }
  ];
  questions: Question[] = [
    {
      id: 'perdida_interes_social',
      label: '¿La persona ha perdido interés en los amigos, la familia o en las actividades caseras?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'falta_curiosidad',
      label: '¿Carece de curiosidad en temas que antes le atraían?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'menos_espontaneo',
      label: '¿La persona se ha hecho menos espontánea y activa? Por ejemplo, ¿tiende menos a iniciar o mantener una conversación?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'falta_motivacion',
      label: '¿Ha perdido la motivación para realizar sus obligaciones o intereses?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'menos_afectuoso',
      label: '¿La persona es menos afectuosa y/o carente de emociones en comparación a como era habitualmente?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'indiferencia_total',
      label: '¿A esta persona ya no le importa nada?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'tristeza_llanto',
      label: '¿La persona ha desarrollado tristeza o parece baja de ánimo? ¿Tiene episodios de llanto?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'incapacidad_placer',
      label: '¿Es menos capaz de experimentar placer?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'desanimo_futuro',
      label: '¿La persona se ha desanimado respecto a su futuro o siente que es un fracaso?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'se_siente_carga',
      label: '¿La persona se ve a sí misma como una carga para la familia?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'ansiedad_rutina',
      label: '¿La persona se ha hecho más ansiosa o preocupada por cosas rutinarias (ej. acontecimientos, visitas, etc.)?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'tension_angustia',
      label: '¿La persona se siente muy tensa, ha desarrollado incapacidad para relajarse, está inquieta o tiene síntomas de angustia?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
  
    // Sección: Control del Comportamiento e Impulsos
    {
      id: 'agresividad_irritabilidad',
      label: '¿La persona se agita, se ha hecho agresiva, irritable o temperamental?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'discusion_excesiva',
      label: '¿La persona se ha hecho irrazonablemente o atípicamente discutidora?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'impulsividad',
      label: '¿La persona se ha hecho más impulsiva y parece que actúa sin tomar en consideración las cosas?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'desinhibicion_sexual',
      label: '¿Muestra un comportamiento sexualmente desinhibido o invasivo, como tocar (a sí mismo o a otros), abrazar, tentar, etc. de una manera que no le es característica o que puede ofender?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'frustracion_impaciencia',
      label: '¿La persona se ha hecho más fácilmente frustrada o impaciente? ¿Tiene problemas para sobrellevar los retrasos, esperar sucesos o que le llegue su turno?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'imprudencia_conduccion',
      label: '¿Muestra ahora imprudencia o falta de juicio al conducir (ej. dar acelerones, virajes erráticos, cambios de carril bruscos, etc.)?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'rigidez_pensamiento',
      label: '¿La persona se ha hecho más tozuda o rígida, ej. insiste inusualmente en llevar razón o es incapaz de ver/escuchar los puntos de vista de los demás?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
  
    // Sección: Conductas Alimentarias y Adictivas
    {
      id: 'cambio_comportamiento_alimentario',
      label: '¿Ha habido un cambio en su comportamiento alimentario (ej. comer en exceso, con la boca demasiado llena, insistir en comer solo determinadas comidas, o comer la comida exactamente en el mismo orden)?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'perdida_interes_comida',
      label: '¿Ha dejado de encontrar sabrosa la comida o de disfrutar de ella? ¿Está comiendo menos?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'acumulacion_objetos',
      label: '¿Acumula objetos como no lo hacía antes?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'comportamientos_repetitivos',
      label: '¿Ha desarrollado comportamientos repetitivos simples o compulsiones?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'adicciones',
      label: '¿Ha desarrollado recientemente dificultades para controlar el consumo de tabaco, de alcohol, de fármacos o drogas, problemas con el juego o ha empezado a robar en tiendas?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
  
    // Sección: Normas Sociales y Empatía
    {
      id: 'falta_empatia',
      label: '¿La persona se preocupa menos de cómo sus palabras o acciones afectan a los demás? ¿Se ha hecho insensible a los sentimientos de los demás?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
    {
      id: 'indiscrecion_privada',
      label: '¿Ha empezado a hablar abiertamente de asuntos muy personales o privados que habitualmente no se discuten en público?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    },
  
    // Sección: Creencias y Experiencias Sensoriales
    {
      id: 'delirios_persecucion',
      label: '¿La persona ha desarrollado creencias de que está en peligro o que otros están planeando hacerle daño o robar sus pertenencias?',
      type: 'selectValue',
      optionsValue: this.severityOptions,
      validators: [Validators.required]
    }
  ];
  onSubmit(data: FormGroup) {
    console.log(data);
  }
}
