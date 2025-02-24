import { Component } from '@angular/core';
import { NeuIsquemiaHachinskiComponent } from "../../forms/neurologiaForms/neu-isquemia-hachinski/neu-isquemia-hachinski.component";
import { NeuForm1Component } from "../../forms/neurologiaForms/neu-form-1/neu-form-1.component";
import { NeuIfsComponent } from "../../forms/neurologiaForms/neu-ifs/neu-ifs.component";

@Component({
  selector: 'app-neurologia',
  standalone: true,
  imports: [NeuIsquemiaHachinskiComponent, NeuForm1Component, NeuIfsComponent],
  templateUrl: './neurologia.component.html',
  styleUrl: './neurologia.component.css'
})
export class NeurologiaComponent {

}
