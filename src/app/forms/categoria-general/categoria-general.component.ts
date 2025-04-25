import { categoriaDto } from '../../interfaces/dtos/categoria-dto';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from './../../shared/categoria/preguntas-service/preguntas.service';

import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoriaService } from '../../shared/categoria/categoria-service/categoria.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-general',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioComponent, CommonModule],
  templateUrl: './categoria-general.component.html',
  styleUrl: './categoria-general.component.css'
})
export class CategoriaGeneralComponent implements OnInit{
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        const id = Number(idParam);
        
        // Obtenemos el nuevo valor después del cambio de ruta
        this.categoriaActual = this.categoriaService.getCategoriaActual();
        console.log("Categoria actual:", this.categoriaActual);
  
        this.loadPreguntas(id);
      }
    });
  }  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private preguntasService = inject(PreguntasService);
  private categoriaService = inject(CategoriaService);
  preguntaDto!: preguntaDto[];
  categoriaActual!: categoriaDto;
  loadPreguntas(id: number) {
    this.preguntasService.getPreguntas(id).subscribe(data => {
      this.preguntaDto = data;
      console.log("Preguntas cargadas:", this.preguntaDto);

    });
  }
  handleFormSubmit(data: FormGroup) {
      console.log("Formulario enviado con datos:",  data.value);
  }
}
