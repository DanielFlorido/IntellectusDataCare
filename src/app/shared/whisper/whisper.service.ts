import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConsultaService } from '../consulta/consulta.service';

@Injectable({
  providedIn: 'root'
})
export class WhisperService {

  private apiURL = "http://localhost:8081/api/whisper/";

  constructor(
    private http: HttpClient
  ) { }

  private service = inject(ConsultaService);

  transcribeAudio(formData: FormData): Observable<string> {
    const consultaId = this.service.getConsultaActualSync()?.id!;
    formData.append("id", consultaId.toString());
    return this.http.post(this.apiURL + "transcription", formData, {responseType: "text"});
  }
}
