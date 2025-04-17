import { inject, Injectable } from '@angular/core';
import { area } from '../../interfaces/dtos/area-dto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  
  constructor() { }
  private baseurl = environment.apiUrl;
  private http: HttpClient  = inject(HttpClient);
  getItems(): Observable<area[]> {
    return this.http.get<area[]>(`${this.baseurl}/areas`);
  }
}
