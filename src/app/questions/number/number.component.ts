import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  @Input('question')
  question!: preguntaDto;
  @Input('control')
  control!: FormControl;
}
