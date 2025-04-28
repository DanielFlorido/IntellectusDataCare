import { Routes } from '@angular/router';
import { CategoriaGeneralComponent } from './forms/categoria-general/categoria-general.component';
import { AreaComponent } from './tabs/general/general/area.component';
import { PacientesComponent } from './tabs/pacientes/pacientes.component';
import { CrearPacienteComponent } from './tabs/pacientes/crearPaciente/crear-paciente/crear-paciente.component';

export const routes: Routes = [
    {
        path: 'pacientes',
        component: PacientesComponent,
    },
    {
        path: 'crear-paciente',
        component: CrearPacienteComponent,
        title: 'Crear Paciente'
    },
    {
        path: ':areaNombre', // Ruta para el área
        component: AreaComponent, // El componente que carga las categorías
        children: [
            {
                path: ':id', // Ruta para la categoría específica
                component: CategoriaGeneralComponent, // El componente que muestra la categoría
            }
        ]
    },
    { path: '**', redirectTo: '/pacientes', pathMatch: 'full' },
];
