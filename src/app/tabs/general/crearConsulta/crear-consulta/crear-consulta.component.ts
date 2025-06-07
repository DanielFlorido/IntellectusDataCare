import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { CategoriaGeneralComponent } from "../../../../forms/categoria-general/categoria-general.component";
import { NavbarComponent } from "../../../../header/navbar/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crear-consulta',
  standalone: true,
  imports: [ RouterOutlet,NavbarComponent],
  templateUrl: './crear-consulta.component.html',
  styleUrl: './crear-consulta.component.css'
})
export class CrearConsultaComponent {

}
