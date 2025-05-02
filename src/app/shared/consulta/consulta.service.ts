import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../env/enviroment';
import { ConsultaDto } from '../../interfaces/dtos/consulta-dto';
import { IdMessageDto } from '../../interfaces/dtos/id-mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor() { }
  private http = inject(HttpClient);
  private baseurl = environment.apiUrl;

  getConsultasPorPaciente(pacienteId: number): Observable<ConsultaDto[]> {
    return this.http.get<ConsultaDto[]>(`${this.baseurl}/consulta/${pacienteId}`);
  }
  crearConsulta(pacienteId: number): Observable<IdMessageDto> {
    return this.http.post<IdMessageDto>(`${this.baseurl}/consulta/${pacienteId}`, null);
  }
}
