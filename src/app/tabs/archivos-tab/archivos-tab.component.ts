import { Component } from '@angular/core';
import { ArchivosFormsComponent } from "../../forms/archivos-forms/archivos-forms.component";
import { NavbarComponent } from "../../header/navbar/navbar/navbar.component";

@Component({
  selector: 'app-archivos-tab',
  standalone: true,
  imports: [ArchivosFormsComponent, NavbarComponent],
  templateUrl: './archivos-tab.component.html',
  styleUrl: './archivos-tab.component.css'
})
export class ArchivosTabComponent {

}
