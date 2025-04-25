import { Routes } from '@angular/router';
import { CategoriaGeneralComponent } from './forms/categoria-general/categoria-general.component';
import { AreaComponent } from './tabs/general/general/area.component';

export const routes: Routes = [
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
    { path: '', redirectTo: '/geriatria', pathMatch: 'full' },
];
