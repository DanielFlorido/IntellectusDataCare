import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-indice-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indice-navegacion.component.html',
  styleUrl: './indice-navegacion.component.css'
})
export class IndiceNavegacionComponent implements AfterViewInit {
  @Input() secciones: { id: string; titulo: string }[] = [];
  @ViewChild('indice') indice!: ElementRef;
  seccionActiva: string = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.detectarSeccionVisible();
  }

  scrollToSection(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  detectarSeccionVisible() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.seccionActiva = entry.target.id;
          }
        });
      },
      { threshold: 0.3 } // Detecta cuando un 30% de la sección es visible
    );

    this.secciones.forEach(sec => {
      const elemento = document.getElementById(sec.id);
      if (elemento) {
        observer.observe(elemento);
      }
    });
  }
}
