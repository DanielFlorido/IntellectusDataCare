import { Component } from '@angular/core';
import { WhisperFormComponent } from "../../forms/whisper-form/whisper-form.component";

@Component({
  selector: 'app-whisper',
  standalone: true,
  imports: [WhisperFormComponent],
  templateUrl: './whisper.component.html',
  styleUrl: './whisper.component.css'
})
export class WhisperComponent {

}
