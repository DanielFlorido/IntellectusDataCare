import { Component } from '@angular/core';
import { IndiceBarthelComponent } from "../../forms/geriatriaForms/indice-barthel/indice-barthel.component";
import { PreguntasComponent } from "../../forms/geriatriaForms/preguntas/preguntas.component";

@Component({
  selector: 'app-geriatria',
  standalone: true,
  imports: [IndiceBarthelComponent, PreguntasComponent],
  templateUrl: './geriatria.component.html',
  styleUrl: './geriatria.component.css'
})
export class GeriatriaComponent {

}
