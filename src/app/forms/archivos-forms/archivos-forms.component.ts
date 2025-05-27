import { Component, inject, Input } from '@angular/core';
import { FilesDTO } from '../../interfaces/dtos/Files-dto';
import { ArchivosService } from '../../shared/archivos/archivos.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';
import { PacienteService } from '../../shared/paciente/paciente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivos-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archivos-forms.component.html',
  styleUrl: './archivos-forms.component.css',
})
export class ArchivosFormsComponent {
  archivos: FilesDTO[] = [];
  private readonly archivoService = inject(ArchivosService);
  private readonly pacienteService = inject(PacienteService);
  private readonly consultaService = inject(ConsultaService);
  private consulta = this.consultaService.getConsultaActualSync();
  private paciente  = this.pacienteService.getPacienteActualSync();
  ngOnInit(): void {
    this.cargarArchivos();
  }

  cargarArchivos(): void {
    this.archivoService.obtenerArchivosPorPaciente(this.paciente?.id!).subscribe({
      next: (res) => (this.archivos = res),
      error: (err) => console.error('Error al obtener archivos:', err),
    });
  }

  descargar(archivo: FilesDTO): void {
    this.archivoService.descargarArchivo(archivo.id).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = archivo.nombreArchivo;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  onArchivoSeleccionado(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.archivoService.subirArchivo(this.consulta?.id!, file).subscribe({
        next: () => {
          alert('Archivo subido correctamente');
          this.cargarArchivos();
        },
        error: (err) => {
          console.error('Error al subir archivo:', err);
          alert('Error al subir archivo');
        },
      });
    }
  }
}
