import { CategoriaService } from './../../shared/categoria/categoria-service/categoria.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { categoriaDto } from '../../interfaces/dtos/categoria-dto';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import id from '@angular/common/locales/id';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';

@Component({
  selector: 'app-indice-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indice-navegacion.component.html',
  styleUrl: './indice-navegacion.component.css'
})
export class IndiceNavegacionComponent implements OnInit {
  categorias: categoriaDto[] = [];
  @ViewChild('indice') indice!: ElementRef;

  seccionActiva: string = '';
  private CategoriaService = inject(CategoriaService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Detectar cambios en la URL
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const idParam = this.route.snapshot.firstChild?.paramMap.get('id');
        this.seccionActiva = idParam ?? '';
        this.getCategorias();
      });
    this.getCategorias();
  }
  getCategorias() {
    this.CategoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      console.log(data);
      
    });
  }
  navegarACategoria(categoria: categoriaDto) {
    this.CategoriaService.setCategoriaActual(categoria);
    this.router.navigate([categoria.id], { relativeTo: this.route });
  }
}
