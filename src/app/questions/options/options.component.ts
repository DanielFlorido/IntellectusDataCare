import { Component, Input } from '@angular/core';
import { Question } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  @Input('question')
  question!:Question;
  @Input('control')
  control!:FormControl;
}
