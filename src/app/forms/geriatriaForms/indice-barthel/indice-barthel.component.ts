import { Component, Inject, inject, OnInit } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../../questions/options/options.component";
import { TextComponent } from "../../../questions/text/text.component";
import { NumberComponent } from "../../../questions/number/number.component";
import { DateComponent } from "../../../questions/date/date.component";
import { YesNoQuestionComponent } from "../../../questions/yes-no-question/yes-no-question.component";

@Component({
  selector: 'app-indice-barthel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OptionsComponent, TextComponent, NumberComponent, DateComponent, YesNoQuestionComponent],
  templateUrl: './indice-barthel.component.html',
  styleUrl: './indice-barthel.component.css'
})
export class IndiceBarthelComponent implements OnInit {
  
  questions: Question[]=[
    {id:'pregunta1',label:'pregunta1', type: 'select',validators:[Validators.required], options:['opcion1', 'opcion2']},
    {id:'pregunta2',label:'pregunta2', type: 'select',validators:[Validators.required], options:['opcion1', 'opcion2']},
    {id:'pregunta3',label:'pregunta3', type: 'text',validators:[Validators.required]},
    {id:'pregunta4', label: 'pregunta4', type: 'number', validators: [Validators.required, Validators.max(15), Validators.min(0)]},
    {id:'pregunta5', label: 'pregunta5', type: 'date', validators: [Validators.required]},
    {id:'pregunta6', label: 'pregunta6', type: 'yesNo', validators: [Validators.required]}
  ]
  form! :FormGroup;

  constructor ( private fb : FormBuilder){}

  ngOnInit() {    
    this.form = this.fb.group(
      this.questions.reduce((group: { [key: string]: any }, question) => {
        group[question.id] = ['', question.validators || []];
        return group;
      }, {})
    );
  }
  getControl(id: string): FormControl {
    return this.form.get(id) as FormControl;
  }
  onSubmit(){
    console.log(this.form.value);
  }
}
