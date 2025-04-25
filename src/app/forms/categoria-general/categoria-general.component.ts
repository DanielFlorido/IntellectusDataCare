import { categoriaDto } from '../../interfaces/dtos/categoria-dto';
import { preguntaDto } from '../../interfaces/dtos/pregunta-dto';
import { PreguntasService } from './../../shared/categoria/preguntas-service/preguntas.service';

import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../shared/categoria/categoria-service/categoria.service';

@Component({
  selector: 'app-categoria-general',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioComponent],
  templateUrl: './categoria-general.component.html',
  styleUrl: './categoria-general.component.css'
})
export class CategoriaGeneralComponent implements OnInit{
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.loadPreguntas(id);
    }
    this.categoriaActual = this.categoriaService.getCategoriaActual();
  }
  private route = inject(ActivatedRoute);
  private preguntasService = inject(PreguntasService);
  private categoriaService = inject(CategoriaService);
  preguntaDto!: preguntaDto[];
  categoriaActual!: categoriaDto;
  loadPreguntas(id: number) {
    this.preguntasService.getPreguntas(id).subscribe(data => {
      this.preguntaDto = data;
    });
  }
  handleFormSubmit(data: FormGroup) {
      console.log("Formulario enviado con datos:",  data.value);
  }
}
