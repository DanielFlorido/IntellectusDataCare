import { area } from './../../interfaces/dtos/area-dto';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  
  constructor() { }
  private baseurl = environment.apiUrl;
  private http: HttpClient  = inject(HttpClient);
  private areasSubject = new BehaviorSubject<area[]>([]);  
  areas: area[]=[];

  getAreas(): Observable<area[]> {
    if (this.areas.length === 0) {
      this.http.get<area[]>(`${this.baseurl}/areas`).subscribe((data) => {
        this.areas = data;
        this.areasSubject.next(data);
      });
    }
    return this.areasSubject.asObservable();
  }
  getAreaByNombre(nombre: string): area | undefined {
    return this.areas.find((a) => a.nombre === nombre);
  }  
  private areaActual!: area;

  setAreaActual(area: area)  {
    this.areaActual = area;
  }

  getAreaActual() {
    return this.areaActual;
  }
}
