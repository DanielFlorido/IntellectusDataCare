import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {  GDSQuestion } from '../../../interfaces/gdsquestion';
import { GDSForm } from '../../../interfaces/gdsform';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gds-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gds-form.component.html',
  styleUrl: './gds-form.component.css'
})

export class GdsFormComponent {
  questions: GDSQuestion[] = [
    { question: '¿Está usted básicamente satisfecho(a) con su vida?', answer: false },
    { question: '¿Ha dejado muchas de sus actividades e intereses?', answer: false },
    { question: '¿Siente que su vida está vacía?', answer: false },
    { question: '¿Se aburre usted a menudo?', answer: false },
    { question: '¿Está usted con buen ánimo la mayor parte del tiempo?', answer: false },
    { question: '¿Teme que algo malo le va a pasar?', answer: false },
    { question: '¿Se siente feliz la mayor parte del tiempo?', answer: false },
    { question: '¿Siente con frecuencia que nada o nadie le puede ayudar?', answer: false },
    { question: '¿Prefiere quedarse en su casa en vez de salir y hacer cosas nuevas?', answer: false },
    { question: '¿Cree que tiene más problemas con su memoria que las demás personas?', answer: false },
    { question: '¿Cree usted que es maravilloso estar vivo(a) en este momento?', answer: false },
    { question: '¿Se siente inútil de la manera en que está en este momento?', answer: false },
    { question: '¿Se siente lleno(a) de energía?', answer: false },
    { question: '¿Siente que su situación no tiene remedio?', answer: false },
    { question: '¿Piensa que la mayoría de las personas están en mejores condiciones que usted?', answer: false }
  ];

  gdsForm!: GDSForm;

  onSubmit(form: NgForm) {
    this.gdsForm = {
      patientId: form.value.patientId,
      date: form.value.date,
      questions: this.questions,
      totalScore: this.calculateTotalScore()
    };

    console.log(this.gdsForm);
  }

  calculateTotalScore(): number {
    return this.questions.filter(q => q.answer === true).length;
  }
}

