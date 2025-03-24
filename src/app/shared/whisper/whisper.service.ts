import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WhisperService {

  private apiURL = "http://localhost:8080/api/whisper/";

  constructor(
    private http: HttpClient
  ) { }

  transcribeAudio(formData: FormData): Observable<string> {
    return this.http.post(this.apiURL + "transcription", formData, {responseType: "text"});
  }
}
