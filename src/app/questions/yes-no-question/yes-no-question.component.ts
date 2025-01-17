import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../interfaces/question';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yes-no-question',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './yes-no-question.component.html',
  styleUrl: './yes-no-question.component.css'
})
export class YesNoQuestionComponent implements OnInit {
  @Input('question')
  question!:Question;
  @Input('control')
  control!: FormControl;

  ngOnInit(): void {
    if(this.question){
      this.question.options= ['si', 'no']
    }
  }
}
