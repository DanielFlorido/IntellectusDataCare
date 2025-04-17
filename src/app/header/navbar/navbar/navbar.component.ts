import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../../../shared/categoria/categoria-service/categoria.service';
import { AreaService } from '../../../shared/area/area.service';
import { area } from '../../../interfaces/dtos/area-dto';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    this.areaService.getItems().subscribe(data => {
      this.items = data;
    });
  }
  items! : area[];
  private areaService = inject(AreaService);
}