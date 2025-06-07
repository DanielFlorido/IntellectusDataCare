import { AreaService } from './../../area/area.service';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { categoriaDto } from '../../../interfaces/dtos/categoria-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseurl = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);
  private areaService = inject(AreaService);

  private categoriasMap = new Map<number, categoriaDto[]>();
  private categoriaSubjectsMap = new Map<number, BehaviorSubject<categoriaDto[]>>();

  private categoriaActual!: categoriaDto;

  constructor() {}

  getCategorias(): Observable<categoriaDto[]> {
    const areaId = this.areaService.getAreaActual().id;

    
    if (this.categoriasMap.has(areaId)) {
      return this.categoriaSubjectsMap.get(areaId)!.asObservable();
    }

    const newSubject = new BehaviorSubject<categoriaDto[]>([]);
    this.categoriaSubjectsMap.set(areaId, newSubject);

    this.http.get<categoriaDto[]>(`${this.baseurl}/categoria/${areaId}`).subscribe((data) => {
      this.categoriasMap.set(areaId, data);
      newSubject.next(data);
    });

    return newSubject.asObservable();
  }

  getCategoriaActual() {
    return this.categoriaActual;
  }

  setCategoriaActual(categoria: categoriaDto) {
    this.categoriaActual = categoria;
  }
}
