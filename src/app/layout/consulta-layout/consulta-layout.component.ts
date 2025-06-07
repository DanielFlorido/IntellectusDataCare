import { Component } from '@angular/core';
import { NavbarComponent } from '../../header/navbar/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-consulta-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './consulta-layout.component.html',
  styleUrl: './consulta-layout.component.css'
})
export class ConsultaLayoutComponent {

}
