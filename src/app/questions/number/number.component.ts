import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from '../../shared/categoria/preguntas-service/preguntas.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  @Input('question')
  question!: preguntaDto;
  @Input('control')
  control!: FormControl;
  private preguntasService = inject(PreguntasService);
  private consultaService= inject(ConsultaService);
  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      const idConsulta = this.consultaService.getConsultaActualSync()?.id;
      if (idConsulta) {
        this.preguntasService.guardarRespuestaAbierta({
          idConsulta,
          idPregunta: this.question.id,
          valor: value?.toString() ?? ''
        });
      }
    });
  }
}
