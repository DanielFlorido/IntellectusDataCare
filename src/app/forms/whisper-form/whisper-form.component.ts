import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhisperService } from '../../shared/whisper/whisper.service';
import { ConsultaService } from '../../shared/consulta/consulta.service';

@Component({
  selector: 'app-whisper-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './whisper-form.component.html',
  styleUrl: './whisper-form.component.css'
})
export class WhisperFormComponent {

  constructor(
    private whisperService: WhisperService,
  ){}

  selectedFile: File | null = null;

  transcription: string = "";

  loadAudio(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const audioUrl = URL.createObjectURL(this.selectedFile);
      const audioPlayer = document.querySelector('audio');
      if (audioPlayer) {
        audioPlayer.src = audioUrl;
        audioPlayer.play();
      }
    }
  }
  
  transcribeAudio() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('formData', this.selectedFile);
      console.log('Archivo listo para subir:', this.selectedFile.name);
      this.whisperService.transcribeAudio(formData).subscribe({
        next: (response) => {this.transcription = response},
        error: (error) => console.error('Error', error)
      })
    } else {
      console.log('No hay archivo seleccionado.');
    }
  }
}
