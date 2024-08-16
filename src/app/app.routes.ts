import { Routes } from '@angular/router';
import { GeriatriaComponent } from './tabs/geriatria/geriatria.component';
import { NeurologiaComponent } from './tabs/neurologia/neurologia.component';
import { NeuropsicologiaComponent } from './tabs/neuropsicologia/neuropsicologia.component';
import { PsiquiatriaComponent } from './tabs/psiquiatria/psiquiatria.component';
import { InfogeneralComponent } from './tabs/infogeneral/infogeneral/infogeneral.component';
import { InformeComponent } from './tabs/informe/informe.component';
import { ConclusionesComponent } from './tabs/conclusiones/conclusiones.component';
import { NoEncontradoComponent } from './errors/noEncontrado/no-encontrado/no-encontrado.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'geriatria',
        component: GeriatriaComponent,
        title: 'Geriatria'  
    },
    {
        path: 'neurologia',
        component: NeurologiaComponent,
        title: 'Neurologia'  
    },
    {
        path: 'neuropsicologia',
        component: NeuropsicologiaComponent,
        title: 'Neuropsicologia'  
    },
    {
        path: 'psiquiatria',
        component: PsiquiatriaComponent,
        title: 'Psiquiatria'  
    },
    {
        path: 'informe',
        component: InformeComponent,
        title: 'Informe'  
    },
    {
        path: 'conclusiones',
        component: ConclusionesComponent,
        title: 'Conclusiones'  
    },
    {
        path: 'infogeneral',
        component: InfogeneralComponent,
        title: 'Informacion General'
    }
];
