import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilesDTO } from '../../interfaces/dtos/Files-dto';
import { environment } from '../../../env/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ArchivosService {
  private readonly baseUrl = environment.apiUrl + '/archivos';
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  obtenerArchivosPorPaciente(id: number): Observable<FilesDTO[]> {
    return this.http.get<FilesDTO[]>(`${this.baseUrl}/paciente/${id}`);
  }

  descargarArchivo(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/descargar/${id}`, {
      responseType: 'blob',
    });
  }

  subirArchivo(consultaId: number, archivo: File): Observable<string> {
    const formData = new FormData();
    formData.append('consultaId', consultaId.toString());
    formData.append('archivo', archivo);

    return this.http.post(`${this.baseUrl}/subir`, formData, {
      responseType: 'text',
    });
  }
  generarInforme(consultaId: number): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/informe/${consultaId}`, null, {
      responseType: 'blob',
    });
  }
}
