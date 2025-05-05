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

    private baseurl = environment.apiUrl;
    private http = inject(HttpClient);

    private pacientesSubject = new BehaviorSubject<PacienteListadoDto[]>([]);
    private pacientes: PacienteListadoDto[] = [];

    private pacienteActualKey = 'paciente-actual';

    private pacienteActualSubject = new BehaviorSubject<PacienteListadoDto | null>(
        this.obtenerPacienteDeStorage()
    );
    constructor() {  }

    getPacientes(): Observable<PacienteListadoDto[]> {
        if (this.pacientes.length === 0) {
            this.http.get<PacienteListadoDto[]>(`${this.baseurl}/pacientes`).subscribe(data => {
                this.pacientes = data;
                this.pacientesSubject.next(data);
            });
        }
        return this.pacientesSubject.asObservable();
    }

    crearPaciente(dto: pacienteDto): Observable<any> {
        return this.http.post(`${this.baseurl}/CrearPaciente`, dto);
    }

    getPacienteActual(): Observable<PacienteListadoDto | null> {
        return this.pacienteActualSubject.asObservable();
    }

    getPacienteActualSync(): PacienteListadoDto | null {
        return this.pacienteActualSubject.value;
    }

    setPacienteActual(paciente: PacienteListadoDto) {
        localStorage.setItem('pacienteActual', JSON.stringify(paciente));
        this.pacienteActualSubject.next(paciente);
    }

    limpiarPacienteActual() {
        localStorage.removeItem(this.pacienteActualKey);
    }

    tienePacienteSeleccionado(): boolean {
        return !!this.pacienteActualSubject.value;
    }

    private obtenerPacienteDeStorage(): PacienteListadoDto | null {
        const data = localStorage.getItem('pacienteActual');
        return data ? JSON.parse(data) : null;
    }
}
