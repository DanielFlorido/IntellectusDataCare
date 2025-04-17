import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categoriasDto } from '../../../interfaces/dtos/categorias-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias1: categoriasDto[] = [
    { id: 1, label: 'Preguntas' },
    { id: 2, label: 'Índice Barthel' },
    { id: 3, label: 'Actividad Pfeffer' },
    { id: 4, label: 'QSM-F' },
    { id: 5, label: 'STOP-BANG' },
    { id: 6, label: 'FES-I' },
    { id: 7, label: 'MNA-SF' },
    { id: 8, label: 'Valoración Social' },
  ];
  
  constructor() { }
  getCategorias(id: number): Observable<categoriasDto[]> {
    switch (id) {
      case 1:
        return of(this.categorias1);
      default:
        return of(this.categorias1);
    }
  }
  
}
