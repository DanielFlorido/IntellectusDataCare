import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
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
