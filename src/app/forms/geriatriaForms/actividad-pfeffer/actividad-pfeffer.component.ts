import { Component } from '@angular/core';
import { FormularioComponent } from "../../formulario/formulario.component";
import { Question } from '../../../interfaces/question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actividad-pfeffer',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './actividad-pfeffer.component.html',
  styleUrl: './actividad-pfeffer.component.css'
})
export class ActividadPfefferComponent {
  optionsValue = [
    { label: 'Normal o nunca lo hizo, pero podría hacerlo solo(a)', value: 0 },
    { label: 'Con dificultad, pero se maneja solo', value: 1 },
    { label: 'Necesita ayuda (pero lo hace)', value: 2 },
    { label: 'Dependiente (no puede realizarlo)', value: 3 }
  ];
  questions: Question[]=[
    {
      id: 'q1',
      label: 'Hacer cheques, pagar las cuentas o llevar un balance correcto en sus cuentas.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 1
    },
    {
      id: 'q2',
      label: 'Organizar los documentos para la declaración de impuestos, asuntos de negocio u otro tipo de documento.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 0
    },
    {
      id: 'q3',
      label: 'Hacer compras por sí mismo(a) (por ejemplo, comprar ropa, cosas para la casa o alimentos).',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q4',
      label: 'Participar en pasatiempos o juegos de destreza como jugar cartas o canasta, ajedrez.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q5',
      label: 'Calentar agua, preparar una taza de café, apagar la estufa.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q6',
      label: 'Preparar una comida balanceada.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q7',
      label: 'Estar al tanto de las noticias.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q8',
      label: 'Prestar atención y entender un programa de televisión, un libro o una revista.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q9',
      label: 'Recordar citas, eventos familiares, días de fiesta, toma de medicamentos.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    },
    {
      id: 'q10',
      label: 'Viajar fuera de su vecindario, manejar un automóvil o planear un viaje usando transporte público.',
      type: 'selectValue',
      optionsValue: this.optionsValue,
      value: 3
    }
  ];
  onSubmit(data: FormGroup){
    console.log(data.value);
  }
}
