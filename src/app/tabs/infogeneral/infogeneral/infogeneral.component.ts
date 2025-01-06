import { Component } from '@angular/core';
import { EntradaComponent } from "../../../forms/entrada/entrada.component";
import { InformacionPacienteformComponent } from "../../../forms/informacion-pacienteform/informacion-pacienteform.component";

@Component({
  selector: 'app-infogeneral',
  standalone: true,
  imports: [EntradaComponent, InformacionPacienteformComponent],
  templateUrl: './infogeneral.component.html',
  styleUrl: './infogeneral.component.css'
})
export class InfogeneralComponent {

}
