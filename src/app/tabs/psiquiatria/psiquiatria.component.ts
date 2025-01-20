import { Component } from '@angular/core';
import { GdsFormComponent } from "../../forms/gds-form/gds-form/gds-form.component";
import { PsiGdsComponent } from "../../forms/psiquiatriaForms/psi-gds/psi-gds.component";
import { PsiPhq9Component } from "../../forms/psiquiatriaForms/psi-phq-9/psi-phq-9.component";

@Component({
  selector: 'app-psiquiatria',
  standalone: true,
  imports: [PsiGdsComponent, PsiPhq9Component],
  templateUrl: './psiquiatria.component.html',
  styleUrl: './psiquiatria.component.css'
})
export class PsiquiatriaComponent {

}
