import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../questions/options/options.component";
import { TextComponent } from "../../questions/text/text.component";
import { NumberComponent } from "../../questions/number/number.component";
import { DateComponent } from "../../questions/date/date.component";
import { YesNoQuestionComponent } from "../../questions/yes-no-question/yes-no-question.component";
import { OptionsValueComponent } from "../../questions/options-value/options-value.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OptionsComponent, TextComponent, NumberComponent, DateComponent, YesNoQuestionComponent, OptionsValueComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input({required: true, alias:'questions'})
  questions!: Question[];
  @Input({required: true, alias: 'onSubmitHandler'}) onSubmitHandler!: (formValue: any) => void; 

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  onSubmit() {
    if (this.form.valid) {
      if (this.onSubmitHandler) {
        this.onSubmitHandler(this.form); 
      }
    }else{
      this.form.markAllAsTouched();
    }
  }
}
