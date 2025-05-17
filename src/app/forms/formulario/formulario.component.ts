import { Component, Input, OnInit, OnChanges, EventEmitter,Output, SimpleChanges, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../questions/options/options.component";
import { TextComponent } from "../../questions/text/text.component";
import { NumberComponent } from "../../questions/number/number.component";
import { DateComponent } from "../../questions/date/date.component";
import { YesNoQuestionComponent } from "../../questions/yes-no-question/yes-no-question.component";
import { OptionsValueComponent } from "../../questions/options-value/options-value.component";
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from '../../shared/categoria/preguntas-service/preguntas.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OptionsComponent, TextComponent, NumberComponent, DateComponent, YesNoQuestionComponent, OptionsValueComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit, OnChanges{
  @Input() idCategoria!: number;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  form!: FormGroup;
  preguntas: preguntaDto[] = [];

  constructor() {}
  private preguntasService = inject(PreguntasService);
  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.idCategoria) {
      this.preguntasService.getPreguntas(this.idCategoria).subscribe({
        next: (data) => {
          this.preguntas = data;
          this.buildForm();
        },
        error: (err) => {
          console.error('Error al cargar preguntas:', err);
        }
      });
    }
  }

  buildForm(): void {
    const group: Record<string, FormControl> = {};
    this.preguntas.forEach(p => {
      group[p.id.toString()] = new FormControl('', p.validators || []);
    });
    this.form = new FormGroup(group);
  }

  getControl(id: string): FormControl {
    return this.form.get(id) as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form);
    }
  }
}
