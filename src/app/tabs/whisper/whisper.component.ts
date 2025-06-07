import { Component } from '@angular/core';
import { WhisperFormComponent } from "../../forms/whisper-form/whisper-form.component";
import { NavbarComponent } from "../../header/navbar/navbar/navbar.component";

@Component({
  selector: 'app-whisper',
  standalone: true,
  imports: [WhisperFormComponent, NavbarComponent],
  templateUrl: './whisper.component.html',
  styleUrl: './whisper.component.css'
})
export class WhisperComponent {

}
