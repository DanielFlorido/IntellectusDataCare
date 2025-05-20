import { Routes } from '@angular/router';
import { CategoriaGeneralComponent } from './forms/categoria-general/categoria-general.component';
import { AreaComponent } from './tabs/general/general/area.component';
import { PacientesComponent } from './tabs/pacientes/pacientes.component';
import { CrearPacienteComponent } from './tabs/pacientes/crearPaciente/crear-paciente/crear-paciente.component';
import { CrearConsultaComponent } from './tabs/general/crearConsulta/crear-consulta/crear-consulta.component';
import { ConsultaLayoutComponent } from './layout/consulta-layout/consulta-layout.component';
import { WhisperComponent } from './tabs/whisper/whisper.component';

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
    path: 'consulta',
    component: ConsultaLayoutComponent, // 🔁 nuevo Layout Component
    children: [
        {
        path: '',
        component: CrearConsultaComponent // navbar + selección inicial
        },
        {
        path: ':areaNombre',
        component: AreaComponent,
        children: [
            {
            path: ':idCategoria',
            component: CategoriaGeneralComponent
            }
        ]
        }
    ]
    },
    {
        path: 'whisper',
        component: WhisperComponent
    },
    {
        path: '',
        redirectTo: 'pacientes',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'pacientes'
    }
];
