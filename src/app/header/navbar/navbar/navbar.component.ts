import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items = [
    { label: 'Informacion General', icon : 'Ger', route: 'infogeneral'},
    { label: 'Geriatria', icon : 'Ger', route: 'geriatria'},
    { label: 'Psiquiatria', icon : 'Ger', route: 'psiquiatria'},
    { label: 'Neurologia',  icon : 'Ger', route: 'neurologia'},
    { label: 'Neuropsicologia', icon : 'Ger', route: 'neuropsicologia'},
    { label: 'Conclusiones Conjuntas', icon : 'Ger', route: 'conclusiones'},
    { label: 'Informe', icon : 'Ger', route: 'informe'}
  ];
}
