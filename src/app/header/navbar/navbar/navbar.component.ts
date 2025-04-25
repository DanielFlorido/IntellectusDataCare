import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AreaService } from '../../../shared/area/area.service';
import { area } from '../../../interfaces/dtos/area-dto';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isActive(ruta: string) {
    return this.router.url.includes(ruta);
  }
  navegarAArea(item: area) {
    this.areaService.setAreaActual(item); 
    this.router.navigate(['/',item.nombre]); 
  }
  ngOnInit(): void {
    this.areaService.getAreas().subscribe(data => {
      this.items = data;
    });
  }
  items!: area[];
  private areaService = inject(AreaService);
  private router = inject(Router);
}