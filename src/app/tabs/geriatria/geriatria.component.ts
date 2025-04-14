import { CommonModule } from '@angular/common';
import { CategoriaService } from './../../shared/categoria/categoria-service/categoria.service';

import { Component, inject, OnInit } from '@angular/core';
import { IndiceBarthelComponent } from "../../forms/geriatriaForms/indice-barthel/indice-barthel.component";
import { PreguntasComponent } from "../../forms/geriatriaForms/preguntas/preguntas.component";
import { ActividadPfefferComponent } from "../../forms/geriatriaForms/actividad-pfeffer/actividad-pfeffer.component";
import { QSMFComponent } from "../../forms/geriatriaForms/qsm-f/qsm-f.component";
import { StopBangComponent } from "../../forms/geriatriaForms/stop-bang/stop-bang.component";
import { FesIComponent } from "../../forms/geriatriaForms/fes-i/fes-i.component";
import { MnaSfComponent } from "../../forms/geriatriaForms/mna-sf/mna-sf.component";
import { ValoracionSocialComponent } from "../../forms/geriatriaForms/valoracion-social/valoracion-social.component";
import { IndiceNavegacionComponent } from "../../indice/indice-navegacion/indice-navegacion.component";
import { categoriasDto } from '../../interfaces/dtos/categorias-dto';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-geriatria',
  standalone: true,
  imports: [CommonModule,RouterOutlet, IndiceNavegacionComponent],
  templateUrl: './geriatria.component.html',
  styleUrl: './geriatria.component.css'
})
export class GeriatriaComponent implements OnInit{
  
  categorias!: categoriasDto[];
  
  private categoriaService = inject(CategoriaService);
  private router = inject(Router);
  ngOnInit(): void {
    this.loadCategorias(1); // 1 es el ID del área (geriatría)
  }

  loadCategorias(areaId: number) {
    this.categoriaService.getCategorias(areaId).subscribe(data => {
      this.categorias = data;
    });
  }

  navegarACategoria(categoriaId: number) {
    this.router.navigate(['/geriatria', categoriaId]);
  }
}

