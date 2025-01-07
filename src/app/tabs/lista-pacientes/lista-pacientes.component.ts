import { Component, OnInit } from '@angular/core';
import { pacienteDto } from '../../interfaces/dtos/paciente-dto';
import { Page } from '../../interfaces/page';
import { PacienteService } from '../../shared/paciente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent implements OnInit{
  
  currentPage=0;
  paginatedData! : Page<pacienteDto>;

  constructor(private pacienteService: PacienteService) { };

  ngOnInit(): void {
    this.loadPage(this.currentPage)    
  }

  loadPage(page: number){
    this.pacienteService.getPaginatedDTOPaciente(page, 10).subscribe(data =>{
      this.paginatedData=data
    });
  }

  nextPage(): void {
    if (this.currentPage < this.paginatedData.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPage(this.currentPage);
    }
  }
}
