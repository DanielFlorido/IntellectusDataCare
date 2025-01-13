import { Component, Input } from '@angular/core';
import { Question } from '../../interfaces/question';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  @Input('question')
  question!: Question;
  @Input('control')
  control!: FormControl;
}
