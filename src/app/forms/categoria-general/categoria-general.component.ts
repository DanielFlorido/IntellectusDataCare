import { categoriaDto } from '../../interfaces/dtos/categoria-dto';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoriaService } from '../../shared/categoria/categoria-service/categoria.service';
import { CommonModule } from '@angular/common';
import { TrasntornosSelectorComponent } from '../trasntornosSelector/trasntornos-selector.component';
import { TranstornosTabComponent } from '../../tabs/transtornos-tab/transtornos-tab.component';
import { MedicosTabComponent } from '../../tabs/medicos-tab/medicos-tab.component';
import { ArchivosService } from '../../shared/archivos/archivos.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';

@Component({
  selector: 'app-categoria-general',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormularioComponent,
    CommonModule,
    TranstornosTabComponent,
    MedicosTabComponent,
  ],
  templateUrl: './categoria-general.component.html',
  styleUrl: './categoria-general.component.css',
})
export class CategoriaGeneralComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private categoriaService = inject(CategoriaService);
  private service = inject(ArchivosService);
  categoriaActual!: categoriaDto;
  idCategoria!: number;
  private readonly consultaService = inject(ConsultaService);
  private consulta = this.consultaService.getConsultaActualSync();
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idParam = params['idCategoria'];
      if (idParam) {
        this.idCategoria = Number(idParam);
        this.categoriaActual = this.categoriaService.getCategoriaActual();
        console.log('Categoría actual:', this.categoriaActual);
      }
    });
  }
  mostrarPopup(mensaje: string): void {
    alert(`⚠️ Error de la categoría:\n${mensaje}`);
  }

  handleFormSubmit(form: FormGroup): void {
    console.log('Formulario enviado con datos:', form.value);
  }
  onTrastornoAgregado(trastorno: any) {
    console.log('Agregado:', trastorno);
    // Podrías guardarlo en una lista o enviarlo al backend
  }
  descargarInforme(): void {
    this.service.generarInforme(this.consulta?.id!).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `informe_${this.consulta?.id}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
