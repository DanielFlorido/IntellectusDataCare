import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';

@Component({
  selector: 'app-options-value',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './options-value.component.html',
  styleUrl: './options-value.component.css'
})
export class OptionsValueComponent {
  @Input('question')
    question!:preguntaDto;
  @Input('control')
    control!:FormControl;
}
