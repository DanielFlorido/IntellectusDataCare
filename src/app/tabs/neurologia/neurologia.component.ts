import { Component } from '@angular/core';
import { NeuIsquemiaHachinskiComponent } from "../../forms/neurologiaForms/neu-isquemia-hachinski/neu-isquemia-hachinski.component";

@Component({
  selector: 'app-neurologia',
  standalone: true,
  imports: [NeuIsquemiaHachinskiComponent],
  templateUrl: './neurologia.component.html',
  styleUrl: './neurologia.component.css'
})
export class NeurologiaComponent {

}
