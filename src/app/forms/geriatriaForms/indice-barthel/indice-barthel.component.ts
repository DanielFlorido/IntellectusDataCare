import { Component, Inject, inject, OnInit } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../../questions/options/options.component";
import { TextComponent } from "../../../questions/text/text.component";
import { NumberComponent } from "../../../questions/number/number.component";
import { DateComponent } from "../../../questions/date/date.component";
import { YesNoQuestionComponent } from "../../../questions/yes-no-question/yes-no-question.component";
import { OptionsValueComponent } from "../../../questions/options-value/options-value.component";
import { FormularioComponent } from "../../formulario/formulario.component";

@Component({
  selector: 'app-indice-barthel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormularioComponent],
  templateUrl: './indice-barthel.component.html',
  styleUrl: './indice-barthel.component.css'
})
export class IndiceBarthelComponent {
  questions: Question[] = [
    {
      id: 'pregunta1', label: 'Alimentación', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: capaz de utilizar cualquier instrumento; come en un tiempo razonable; capaz de desmenuzar la comida, usar condimentos, extender la mantequilla, etc, por sí solo. La comida puede situarse al alcance.', value: 10 },
        { label: 'Necesita ayuda: ej.: para cortar, extender la mantequilla.', value: 5 },
        { label: 'Dependiente: necesita ser alimentado.', value: 0 }
      ]
    },
    {
      id: 'pregunta2', label: 'Lavado (Baño)', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: capaz de lavarse entero; puede ser usando la ducha, la tina o permaneciendo de pie y aplicando la esponja sobre todo el cuerpo. Incluye entrar y salir del baño. Puede realizarlo todo sin estar una persona presente.', value: 5 },
        { label: 'Dependiente: necesita alguna ayuda.', value: 0 }
      ]
    },
    {
      id: 'pregunta3', label: 'Vestirse', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: capaz de ponerse, quitarse y fijar la ropa. Se ata los zapatos, abrocha los botones. Se coloca el braguero o el corsé si lo precisa.', value: 10 },
        { label: 'Necesita ayuda: pero al menos la mitad de las tareas las realiza en un tiempo razonable.', value: 5 },
        { label: 'Dependiente.', value: 0 }
      ]
    },
    {
      id: 'pregunta4', label: 'Arreglarse', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: realiza todas las actividades personales (ej.: lavarse manos y cara, peinarse). Incluye afeitarse y lavarse los dientes. No necesita ninguna ayuda. Incluye manejar el enchufe si es con máquina eléctrica.', value: 5 },
        { label: 'Dependiente: necesita alguna ayuda.', value: 0 }
      ]
    },
    {
      id: 'pregunta5', label: 'Deposición', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Continente, ningún accidente: si necesita enema o supositorios se arregla por sí solo.', value: 10 },
        { label: 'Accidente ocasional: raro (menos de una vez por semana) o necesita ayuda para el enema o supositorio.', value: 5 },
        { label: 'Incontinente.', value: 0 }
      ]
    },
    {
      id: 'pregunta6', label: 'Micción', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Continente, ningún accidente: seco día y noche. Capaz de usar cualquier dispositivo (ej.: catéter) si es necesario o es capaz de cambiar la bolsa.', value: 10 },
        { label: 'Accidente ocasional: menos de una vez por semana; necesita ayuda con instrumentos.', value: 5 },
        { label: 'Incontinente.', value: 0 }
      ]
    },
    {
      id: 'pregunta7', label: 'Sanitario', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: entra y sale solo. Capaz de quitarse y ponerse la ropa, limpiarse, prevenir el manchado de la ropa, limpiar y vaciar completamente la bacinilla o sanitario sin ayuda. Capaz de sentarse y levantarse sin ayuda. Puede utilizar barras para soportarse.', value: 10 },
        { label: 'Necesita ayuda: capaz de manejarse con pequeña ayuda en el equilibrio, quitarse y ponerse la ropa o usar el papel del baño. Sin embargo, aún es capaz de utilizar el inodoro.', value: 5 },
        { label: 'Dependiente: incapaz de manejarse sin asistencia mayor.', value: 0 }
      ]
    },
    {
      id: 'pregunta8', label: 'Traslado Sillón - Cama', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: sin ayuda en todas las fases, se aproxima a la cama, frena y cierra la silla de ruedas si es necesaria, desplaza el apoyapié, se mete y se acuesta en la cama, se coloca en posición de sentado en un lado de la cama, vuelve a la silla de ruedas.', value: 15 },
        { label: 'Mínima ayuda: incluye supervisión verbal y pequeña ayuda física tal como la ofrecida por un cónyuge no muy fuerte.', value: 10 },
        { label: 'Gran ayuda: capaz de estar sentado sin ayuda, pero necesita mucha asistencia para salir de la cama o desplazarse.', value: 5 },
        { label: 'Dependiente: necesita ayuda o desplazamiento por dos personas. Incapaz de estar sentado.', value: 0 }
      ]
    },
    {
      id: 'pregunta9', label: 'Deambulación', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: puede usar cualquier ayuda: prótesis, caminador, muletas, etc., excepto caminador; la velocidad no es importante. Puede caminar al menos 50 metros o su equivalente en casa sin ayuda o supervisión.', value: 15 },
        { label: 'Necesita ayuda: supervisión física o verbal, incluyendo instrumentos u otras ayudas para permanecer de pie; deambula 50 metros.', value: 10 },
        { label: 'Independiente en silla de ruedas: en 50 metros. Debe ser capaz de girar esquinas solo.', value: 5 },
        { label: 'Inmóvil: incluye ser rodado por otro.', value: 0 }
      ]
    },
    {
      id: 'pregunta10', label: 'Escalones', type: 'selectValue', validators: [Validators.required],
      optionsValue: [
        { label: 'Independiente: capaz de subir y bajar un piso de escaleras sin ayuda o supervisión. Puede utilizar el apoyo que precisa para andar (bastón, muletas, etc.).', value: 10 },
        { label: 'Necesita ayuda: supervisión física o verbal.', value: 5 },
        { label: 'Incapaz: necesita alzamiento (ascensor), o no puede subir escalones.', value: 0 }
      ]
    }
  ];
  handleFormSubmit(data: FormGroup) {
    console.log("Formulario enviado con datos:",  data.value);
  }
}
