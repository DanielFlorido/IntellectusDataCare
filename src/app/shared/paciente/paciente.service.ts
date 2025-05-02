import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Page } from '../../interfaces/page';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/enviroment';
import { PacienteListadoDto } from '../../interfaces/dtos/paciente-listado-dto';
import { pacienteDto } from '../../interfaces/dtos/paciente-dto';

@Injectable({
    providedIn: 'root'
})
export class PacienteService {

    constructor() { };
    private baseurl = environment.apiUrl;
    private http: HttpClient = inject(HttpClient);

    private pacientesSubject = new BehaviorSubject<PacienteListadoDto[]>([]);
    private pacientes: PacienteListadoDto[]=[];

    private pacienteActual!: PacienteListadoDto;

    getPacientes(): Observable<PacienteListadoDto[]> {       
        if(this.pacientes.length === 0) {
            this.http.get<PacienteListadoDto[]>(`${this.baseurl}/pacientes`).subscribe((data) => {
                this.pacientes = data;
                this.pacientesSubject.next(data);
            });
        }
        return this.pacientesSubject.asObservable();
    }
    crearPaciente(dto: pacienteDto): Observable<any> {
        this.http.get<PacienteListadoDto[]>(`${this.baseurl}/pacientes`).subscribe((data) => {
            this.pacientes = data;
            this.pacientesSubject.next(data);
        });
      return this.http.post(`${this.baseurl}/CrearPaciente`, dto);
    }
    getPacienteActual() :Observable<PacienteListadoDto> {
        return of(this.pacienteActual);
    }
    setPacienteActual(paciente: PacienteListadoDto) {
        this.pacienteActual = paciente;
        console.log('Paciente actual:', paciente);
        
    }  
}
