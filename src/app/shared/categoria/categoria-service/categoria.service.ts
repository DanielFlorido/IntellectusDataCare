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
  private items = [
    { label: 'Informacion General', icon : 'Ger', route: 'infogeneral'},
    { label: 'Geriatria', icon : 'Ger', route: 'geriatria'},
    { label: 'Psiquiatria', icon : 'Ger', route: 'psiquiatria'},
    { label: 'Neurologia',  icon : 'Ger', route: 'neurologia'},
    { label: 'Neuropsicologia', icon : 'Ger', route: 'neuropsicologia'},
    { label: 'Conclusiones Conjuntas', icon : 'Ger', route: 'conclusiones'},
    { label: 'Whisper', icon : 'Ger', route: 'whisper'},
    { label: 'Informe', icon : 'Ger', route: 'informe'}
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
  getItems(): Observable<any[]> {
    return of(this.items);
  }
}
