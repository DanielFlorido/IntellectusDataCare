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
import { RespuestaCerradaDTO } from '../../interfaces/dtos/respuesta-cerrada-dto';
import { ConsultaService } from '../../shared/consulta/consulta.service';


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
  loadPreguntas(){
    this.preguntasService.getPreguntas(this.idCategoria).subscribe({
      next: (data) => {
        this.preguntas = data;
        this.buildForm();
        console.log('Preguntas Cargadas', this.preguntas);
        
      },
      error: (err) => {
        console.error('Error al cargar preguntas', err);
      }
    });
  }
  buildForm(): void {
    const group: Record<string, FormControl> = {};

    this.preguntas.forEach(p => {
      const control = new FormControl(p.opcionSeleccionada ?? '', p.validators || []);
      group[p.id.toString()] = control;

      control.valueChanges.subscribe(value => {
        const idConsulta = this.consultaService.getConsultaActualSync()?.id;

        if (!idConsulta) return;

        if (p.tipoRespuesta === 'Desplegable') {
          const idOpcionListado = p.opciones?.find(opt => opt.texto === value)?.id;
          if (idOpcionListado) {
            const dto: RespuestaCerradaDTO = {
              idConsulta,
              idPregunta: p.id,
              idOpcionListado
            };
            this.preguntasService.guardarRespuestaCerrada(dto);
          }
        } else if (['Texto', 'Numero', 'Bool', 'date'].includes(p.tipoRespuesta)) {
          const dto: RespuestaAbiertaDTO = {
            idConsulta,
            idPregunta: p.id,
            valor: value?.toString() ?? ''
          };
          this.preguntasService.guardarRespuestaAbierta(dto);
        }
      });
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
