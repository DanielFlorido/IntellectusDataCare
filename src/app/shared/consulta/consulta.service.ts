import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';
import { ConsultaDto } from '../../interfaces/dtos/consulta-dto';
import { IdMessageDto } from '../../interfaces/dtos/id-mensaje-dto';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor() { }
  private http = inject(HttpClient);
  private baseurl = environment.apiUrl;



  private consultaActualKey = 'consulta-actual';
  
  private consultaActualSubject = new BehaviorSubject<ConsultaDto | null>(
    this.obtenerConsultaDeStorage()
  );
    getConsultasPorPaciente(pacienteId: number): Observable<ConsultaDto[]> {
    return this.http.get<ConsultaDto[]>(`${this.baseurl}/consulta/${pacienteId}`);
  }
  crearConsulta(pacienteId: number): Observable<IdMessageDto> {
    return this.http.post<IdMessageDto>(`${this.baseurl}/consulta/${pacienteId}`, null);
  }
  setConsultaActual(consulta: ConsultaDto): void {
    localStorage.setItem(this.consultaActualKey, JSON.stringify(consulta));
    this.consultaActualSubject.next(consulta);
  }

  getConsultaActual(): Observable<ConsultaDto | null> {
    return this.consultaActualSubject.asObservable();
  }

  getConsultaActualSync(): ConsultaDto | null {
    return this.consultaActualSubject.value;
  }

  limpiarConsultaActual(): void {
    localStorage.removeItem(this.consultaActualKey);
    this.consultaActualSubject.next(null);
  }

  private obtenerConsultaDeStorage(): ConsultaDto | null {
    const stored = localStorage.getItem(this.consultaActualKey);
    return stored ? JSON.parse(stored) : null;
  }
}
