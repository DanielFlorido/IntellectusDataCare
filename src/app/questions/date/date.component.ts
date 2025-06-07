import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  @Input('question')
  question!:preguntaDto;
  @Input('control')
  control!: FormControl;
}
