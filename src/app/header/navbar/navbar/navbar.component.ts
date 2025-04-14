import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../../../shared/categoria/categoria-service/categoria.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    this.categoriaService.getItems().subscribe(data => {
      this.items = data;
    });
  }
  items! : any[];
  private categoriaService = inject(CategoriaService);
}