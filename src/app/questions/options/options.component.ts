import { Component, inject, Input, OnInit } from '@angular/core';
import { Question } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from '../../shared/categoria/preguntas-service/preguntas.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent implements OnInit{
  @Input('question')
  question!:preguntaDto;
  @Input('control')
  control!:FormControl;
  private preguntasService = inject(PreguntasService);
  private readonly consultaService = inject(ConsultaService);
  ngOnInit(): void {
  this.control.valueChanges.subscribe(value => {
    const idConsulta = this.consultaService.getConsultaActualSync()?.id;

    const idOpcionListado = Number(value);

    if (idConsulta && idOpcionListado) {
      this.preguntasService.guardarRespuestaCerrada({
        idConsulta,
        idPregunta: this.question.id,
        idOpcionListado
      });
    }
  });
}

}

