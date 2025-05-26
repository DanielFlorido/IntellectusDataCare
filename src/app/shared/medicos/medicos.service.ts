import { inject, Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoDTO } from '../../interfaces/dtos/medico-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor() { }
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  obtenerMedicos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/medicos');
  }

  sincronizarMedicosConsulta(consultaId: number, ids: number[]): Observable<string> {
    return this.http.post(this.baseUrl + '/sincronizarMedicosConsulta', {
      consultaId,
      ids
    }, { responseType: 'text' as const });
  }

  obtenerMedicosDeConsulta(consultaId: number): Observable<MedicoDTO[]> {
    return this.http.get<MedicoDTO[]>(`${this.baseUrl}/medicos/${consultaId}`);
  }
}

