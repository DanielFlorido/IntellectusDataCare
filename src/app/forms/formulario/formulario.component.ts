import { Component, Input, OnInit, OnChanges, EventEmitter, Output, SimpleChanges, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../../questions/options/options.component";
import { TextComponent } from "../../questions/text/text.component";
import { NumberComponent } from "../../questions/number/number.component";
import { DateComponent } from "../../questions/date/date.component";
import { YesNoQuestionComponent } from "../../questions/yes-no-question/yes-no-question.component";
import { OptionsValueComponent } from "../../questions/options-value/options-value.component";
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from '../../shared/categoria/preguntas-service/preguntas.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';
import { FijoComponent } from "../../questions/fijo/fijo.component";
import { GraficoQuestionComponent } from "../../questions/grafico-question/grafico-question.component";


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OptionsComponent, TextComponent, NumberComponent, DateComponent, YesNoQuestionComponent, OptionsValueComponent, FijoComponent, GraficoQuestionComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit, OnChanges{
  @Input() idCategoria!: number;
  @Output() formSubmit = new EventEmitter<FormGroup>();
  @Output() errorEncontrado = new EventEmitter<string>();

  form!: FormGroup;
  preguntas: preguntaDto[] = [];

  constructor() {}
  private preguntasService = inject(PreguntasService);
  private consultaService = inject(ConsultaService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idCategoria'] && !changes['idCategoria'].firstChange) {
      this.loadPreguntas();
    }
  }

  ngOnInit(): void {
    if (this.idCategoria) {
      this.loadPreguntas();
    }
  }
  loadPreguntas(): void {
    this.preguntasService.getPreguntas(this.idCategoria).subscribe({
      next: (data) => {
        this.preguntas = data;
        console.log(this.preguntas);

        const error = this.detectarErrorEnPreguntas(this.preguntas);
        if (error) {
          this.errorEncontrado.emit(error);
        }
        this.buildForm();
      },
      error: (err) => {
        console.error('Error al cargar preguntas', err);
      }
    });
  }

  private detectarErrorEnPreguntas(preguntas: preguntaDto[]): string | null {
    const preguntaConError = preguntas.find(p => p.tipoRespuesta === 'Error');
    return preguntaConError ? preguntaConError.valor : null;
  }



  buildForm(): void {
    const group: Record<string, FormControl> = {};

    this.preguntas.forEach(p => {
      const control = this.crearControlParaPregunta(p);
      group[p.id.toString()] = control;
    });

    this.form = new FormGroup(group);
  }
  private crearControlParaPregunta(p: preguntaDto): FormControl {
    let initialValue: any = '';

    if (p.tipoRespuesta === 'Desplegable' && p.opcionSeleccionada !== undefined) {
      initialValue = p.opcionSeleccionada;
    } else if (['Texto', 'Numero', 'Bool', 'date'].includes(p.tipoRespuesta)) {
      initialValue = p.valorAlmacenado ?? '';
    }

    return new FormControl(initialValue, p.validators || []);
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
