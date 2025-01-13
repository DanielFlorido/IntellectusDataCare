import { Component, Input } from '@angular/core';
import { Question } from '../../interfaces/question';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  @Input('question')
  question!:Question;
  @Input('control')
  control!: FormControl;
}
