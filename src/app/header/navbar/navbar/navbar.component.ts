import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items = [
    { label: 'Geriatria', icon : 'Ger'},
    { label: 'Psiquiatria', icon : 'Ger'},
    { label: 'Neurologia',  icon : 'Ger'},
    { label: 'Neuropsicologia', icon : 'Ger'},
    { label: 'Conclusiones Conjuntas', icon : 'Ger'},
    { label: 'Informe', icon : 'Ger'}
  ];
}
