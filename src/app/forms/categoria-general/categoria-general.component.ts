import { PreguntasService } from './../../shared/categoria/preguntas-service/preguntas.service';
import { categoriaDto } from './../../interfaces/dtos/categoria-dto';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ActivatedRoute } from '@angular/router';

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
  }
  private route = inject(ActivatedRoute);
  private preguntasService = inject(PreguntasService);
  categoriaDto!: categoriaDto;
  loadPreguntas(id: number) {
    this.preguntasService.getPreguntas(id).subscribe(data => {
      this.categoriaDto = data;
    });
  }
  handleFormSubmit(data: FormGroup) {
      console.log("Formulario enviado con datos:",  data.value);
  }
}
