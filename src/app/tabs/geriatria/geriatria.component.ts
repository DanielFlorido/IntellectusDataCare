import { Component } from '@angular/core';
import { IndiceBarthelComponent } from "../../forms/geriatriaForms/indice-barthel/indice-barthel.component";
import { PreguntasComponent } from "../../forms/geriatriaForms/preguntas/preguntas.component";
import { ActividadPfefferComponent } from "../../forms/geriatriaForms/actividad-pfeffer/actividad-pfeffer.component";
import { QSMFComponent } from "../../forms/geriatriaForms/qsm-f/qsm-f.component";
import { StopBangComponent } from "../../forms/geriatriaForms/stop-bang/stop-bang.component";
import { FesIComponent } from "../../forms/geriatriaForms/fes-i/fes-i.component";
import { MnaSfComponent } from "../../forms/geriatriaForms/mna-sf/mna-sf.component";
import { ValoracionSocialComponent } from "../../forms/geriatriaForms/valoracion-social/valoracion-social.component";

@Component({
  selector: 'app-geriatria',
  standalone: true,
  imports: [IndiceBarthelComponent, PreguntasComponent, ActividadPfefferComponent, QSMFComponent, StopBangComponent, FesIComponent, MnaSfComponent, ValoracionSocialComponent],
  templateUrl: './geriatria.component.html',
  styleUrl: './geriatria.component.css'
})
export class GeriatriaComponent {

}
