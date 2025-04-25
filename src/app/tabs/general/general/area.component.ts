import { AreaService } from './../../../shared/area/area.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../../../shared/categoria/categoria-service/categoria.service';
import { categoriaDto } from '../../../interfaces/dtos/categoria-dto';
import { IndiceNavegacionComponent } from "../../../indice/indice-navegacion/indice-navegacion.component";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterOutlet, IndiceNavegacionComponent],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit {
  categorias!: categoriaDto[];
  private categoriaService = inject(CategoriaService);
  private router = inject(Router);
  private areaService = inject(AreaService);
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const areaNombre = params.get('areaNombre');
      if (areaNombre) {
        const area = this.areaService.getAreaByNombre(areaNombre);        
        if (area) {
          this.areaService.setAreaActual(area);
          this.loadCategorias();
        }
      }
    });
  }

  loadCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  navegarACategoria(categoriaId: number) {
    const area = this.areaService.getAreaActual();
    this.router.navigate(['/', area.nombre, categoriaId]);
  }
}
