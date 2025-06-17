import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home),
    },
    
    {
        path: '**',
        redirectTo: 'home',
    },
];
