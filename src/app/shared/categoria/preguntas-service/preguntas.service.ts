import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { environment } from '../../../../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { preguntaDto } from '../../../interfaces/dtos/pregunta-dto';
import { ConsultaService } from '../../consulta/consulta.service';
import { RespuestaCerradaDTO } from '../../../interfaces/dtos/respuesta-cerrada-dto';
import { RespuestaAbiertaDTO } from '../../../interfaces/dtos/respuesta-abierta-dto';
import { RespuestaGraficoDto } from '../../../interfaces/dtos/respuesta-grafica-dto';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  private baseurl = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);

  // Mapa para cachear preguntas por categoría
  private preguntasMap = new Map<number, preguntaDto[]>();
  private preguntasSubjectMap = new Map<
    number,
    BehaviorSubject<preguntaDto[]>
  >();
  private consultaService = inject(ConsultaService);
  constructor() {}

  getPreguntas(idCategoria: number): Observable<preguntaDto[]> {
    // Si ya tenemos preguntas para esta categoría, devolvemos su observable
    if (this.preguntasMap.has(idCategoria)) {
      return this.preguntasSubjectMap.get(idCategoria)!.asObservable();
    }
    const consulta = this.consultaService.getConsultaActualSync();
    const consultaId = consulta?.id ?? null;

    // Creamos un nuevo Subject vacío mientras llegan los datos
    const newSubject = new BehaviorSubject<preguntaDto[]>([]);
    this.preguntasSubjectMap.set(idCategoria, newSubject);

    // Pedimos al servidor y guardamos en cache
    this.http
      .get<preguntaDto[]>(
        `${this.baseurl}/pregunta/${idCategoria}/${consultaId}`
      )
      .subscribe((data) => {
        this.preguntasMap.set(idCategoria, data);
        newSubject.next(data);
      });

    return newSubject.asObservable();
  }
  guardarRespuestaCerrada(dto: RespuestaCerradaDTO): void {
    this.http
      .post(`${this.baseurl}/guardarCerrada`, dto, { responseType: 'text' })
      .subscribe({
        next: (res) => console.log('Guardado OK:', res),
        error: (err) =>
          console.error('Error al guardar respuesta cerrada', err),
      });
  }
  guardarRespuestaAbierta(dto: RespuestaAbiertaDTO): void {
    this.http
      .post(`${this.baseurl}/guardarAbierta`, dto, {
        responseType: 'text',
      })
      .subscribe({
        next: (res) => console.log('Servidor dice:', res),
        error: (err) =>
          console.error('Error al guardar respuesta abierta', err),
      });
  }
  guardarRespuestaGrafico(payload: RespuestaGraficoDto): Observable<string> {
    return this.http.post<string>(`${this.baseurl}/guardarGrafica`, payload,{responseType: 'text' as 'json'});
  }
}
