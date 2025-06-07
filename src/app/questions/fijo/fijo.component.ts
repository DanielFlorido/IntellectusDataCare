import { Component, Input } from '@angular/core';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';

@Component({
  selector: 'app-fijo',
  standalone: true,
  imports: [],
  templateUrl: './fijo.component.html',
  styleUrl: './fijo.component.css'
})
export class FijoComponent {
  @Input() question!: preguntaDto;
}
