import { Component, Inject, inject, OnInit } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../../questions/options/options.component";

@Component({
  selector: 'app-indice-barthel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OptionsComponent],
  templateUrl: './indice-barthel.component.html',
  styleUrl: './indice-barthel.component.css'
})
export class IndiceBarthelComponent implements OnInit {
  
  questions: Question[]=[
    {id:'pregunta1',label:'pregunta1', type: 'select',validators:[Validators.required], options:['opcion1', 'opcion2']},
    {id:'pregunta2',label:'pregunta2', type: 'select',validators:[Validators.required], options:['opcion1', 'opcion2']},
    {id:'pregunta3',label:'pregunta3', type: 'text',validators:[Validators.required]}
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
