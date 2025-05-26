import { Component, Input, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PreguntasService } from '../../shared/categoria/preguntas-service/preguntas.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';
import { CommonModule } from '@angular/common';
import { RespuestaGraficoDto } from '../../interfaces/dtos/respuesta-grafica-dto';


@Component({
  selector: 'app-grafico-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './grafico-question.component.html',
  styleUrl: './grafico-question.component.css',
})
export class GraficoQuestionComponent {
  // graph-question.component.ts
  @Input() question!: any;
  @Input() controlGroup!: FormGroup;

  private preguntasService = inject(PreguntasService);
  private consultaService = inject(ConsultaService);

  ngOnInit(): void {
    this.question.secciones.forEach((seccion: any) => {
      seccion.partes.forEach((parte: any) => {
        const controlName = `${this.question.id}_${seccion.nombre}_${parte.id}`;
        const existing = this.controlGroup.get(controlName);
        if (!existing) {
          this.controlGroup.addControl(
            controlName,
            new FormControl(parte.valor ?? null)
          );
          this.controlGroup
            .get(controlName)!
            .valueChanges.subscribe((value) => {
              const idConsulta =
                this.consultaService.getConsultaActualSync()?.id;
              if (idConsulta != null && value != null) {
                const payload: RespuestaGraficoDto = {
                  idConsulta,
                  idParteGrafico: parte.id,
                  valor: value.toString(),
                };

                this.preguntasService
                  .guardarRespuestaGrafico(payload)
                  .subscribe({
                    next: (res) => console.log('Guardado exitoso:', res),
                    error: (err) =>
                      console.error('Error al guardar gráfico:', err),
                  });
              }
            });
        }
      });
    });
  }

  getControlName(seccion: any, parte: any): string {
    return `${this.question.id}_${seccion.nombre}_${parte.id}`;
  }
  getFormControl(controlName: string): FormControl {
    return this.controlGroup.get(controlName) as FormControl;
  }
}
