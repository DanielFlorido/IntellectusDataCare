import { inject, Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeleccionTrastornoDTO } from '../../interfaces/dtos/seleccion-trastorno-dto';

@Injectable({
  providedIn: 'root'
})
export class TrasntornosService {

  constructor() { }
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  obtenerTranstornos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/transtornos`);
  }

  obtenerTranstornosGeneral(transtornoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/transtornoGeneral/${transtornoId}`);
  }

  obtenerTranstornosEspecificos(transtornoGeneralId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/transtornoEspecifico/${transtornoGeneralId}`);
  }
  
  obtenerSeleccionTrastorno(consultaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/seleccionTrastorno/${consultaId}`);
  }
  sincronizarTrastornoEspecificoConsulta(consultaId: number, ids: number[]): Observable<string> {
  const data = {
    consultaId,
    ids
  };
  console.log('data',data);
  
  return this.http.post(this.baseUrl + "/sincronizarTranstornoEspecificoConsulta", data, {
    responseType: 'text' as const
  });
}

}
