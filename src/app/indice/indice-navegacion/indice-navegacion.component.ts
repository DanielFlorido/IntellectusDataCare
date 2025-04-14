import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { categoriasDto } from '../../interfaces/dtos/categorias-dto';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-indice-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indice-navegacion.component.html',
  styleUrl: './indice-navegacion.component.css'
})
export class IndiceNavegacionComponent implements OnInit {
  @Input() categorias: categoriasDto[] = [];
  @ViewChild('indice') indice!: ElementRef;

  seccionActiva: string = '';

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Detectar cambios en la URL
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const idParam = this.route.snapshot.firstChild?.paramMap.get('id');
        this.seccionActiva = idParam ?? '';
      });
  }

  navegarACategoria(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
