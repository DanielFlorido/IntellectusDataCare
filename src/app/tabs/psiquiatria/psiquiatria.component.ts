import { Component } from '@angular/core';
import { GdsFormComponent } from "../../forms/gds-form/gds-form/gds-form.component";
import { PsiGdsComponent } from "../../forms/psiquiatriaForms/psi-gds/psi-gds.component";
import { PsiPhq9Component } from "../../forms/psiquiatriaForms/psi-phq-9/psi-phq-9.component";
import { PsiGad7Component } from "../../forms/psiquiatriaForms/psi-gad-7/psi-gad-7.component";
import { PsiNpiQComponent } from "../../forms/psiquiatriaForms/psi-npi-q/psi-npi-q.component";
import { PsiEscalaCornellComponent } from "../../forms/psiquiatriaForms/psi-escala-cornell/psi-escala-cornell.component";
import { PsiMildBehaviorialComponent } from "../../forms/psiquiatriaForms/psi-mild-behaviorial/psi-mild-behaviorial.component";
import { PsiExamenMentalComponent } from "../../forms/psiquiatriaForms/psi-examen-mental/psi-examen-mental.component";

@Component({
  selector: 'app-psiquiatria',
  standalone: true,
  imports: [PsiGdsComponent, PsiPhq9Component, PsiGad7Component, PsiNpiQComponent, PsiEscalaCornellComponent, PsiMildBehaviorialComponent, PsiExamenMentalComponent],
  templateUrl: './psiquiatria.component.html',
  styleUrl: './psiquiatria.component.css'
})
export class PsiquiatriaComponent {

}
