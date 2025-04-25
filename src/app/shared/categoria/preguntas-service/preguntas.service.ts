import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { environment } from '../../../../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { preguntaDto } from '../../../interfaces/dtos/pregunta-dto';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }
  private baseurl = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);
  private preguntasSubject = new BehaviorSubject<preguntaDto[]>([]);
  preguntas : preguntaDto[] = [];

  getPreguntas(idCategoria: number): Observable<preguntaDto[]> {
    if (this.preguntas.length === 0) {
      this.http.get<preguntaDto[]>(`${this.baseurl}/pregunta/${idCategoria}`).subscribe((data) => {
        this.preguntas = data;
        this.preguntasSubject.next(data);
      });
    }
    return this.preguntasSubject.asObservable();
  }
}


