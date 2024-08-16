import { Routes } from '@angular/router';
import { GeriatriaComponent } from './tabs/geriatria/geriatria.component';
import { NeurologiaComponent } from './tabs/neurologia/neurologia.component';
import { NeuropsicologiaComponent } from './tabs/neuropsicologia/neuropsicologia.component';
import { PsiquiatriaComponent } from './tabs/psiquiatria/psiquiatria.component';

export const routes: Routes = [
    {
        path: '/geriatria',
        component: GeriatriaComponent,
        title: 'Geriatria'  
    },
    {
        path: '/neurologia',
        component: NeurologiaComponent,
        title: 'Neurologia'  
    },
    {
        path: '/neuropsicologia',
        component: NeuropsicologiaComponent,
        title: 'Neuropsicologia'  
    },
    {
        path: '/psiquiatria',
        component: PsiquiatriaComponent,
        title: 'Psiquiatria'  
    },
    {
        path: '/informe',
        component: GeriatriaComponent,
        title: 'Informe'  
    },
    {
        path: '/geriatria',
        component: GeriatriaComponent,
        title: 'Geriatria'  
    },
];
