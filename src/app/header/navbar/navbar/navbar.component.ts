import { PacienteService } from './../../../shared/paciente/paciente.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AreaService } from '../../../shared/area/area.service';
import { area } from '../../../interfaces/dtos/area-dto';
import { PacienteListadoDto } from '../../../interfaces/dtos/paciente-listado-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  pacienteActual$!: Observable<PacienteListadoDto | null>;
  items: area[] = [];

  private pacienteService = inject(PacienteService);
  private areaService = inject(AreaService);
  private router = inject(Router);

  ngOnInit(): void {
    this.areaService.getAreas().subscribe((data) => (this.items = data));
    this.pacienteActual$ = this.pacienteService.getPacienteActual(); // Reactivo
  }

  navegarAArea(item: area) {
    this.areaService.setAreaActual(item);
    this.router.navigate(['/consulta', item.nombre]);
  }

  isActive(ruta: string): boolean {
    return this.router.url.includes(ruta);
  }

  navegarAWhisper() {
    this.router.navigate(['/whisper']);
  }
  navegarAarchivo() {
    this.router.navigate(['/archivos']);
  }

  cerrarConsulta(){
    this.pacienteService.limpiarPacienteActual();
    this.router.navigate(["/"]);
  }
}
