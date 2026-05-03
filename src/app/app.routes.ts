import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Punto1 } from './pages/punto1/punto1'
import { Punto2 } from './pages/punto2/punto2'
import { Punto3 } from './pages/punto3/punto3'

export const routes: Routes = [
// Manda al home si la ruta esta vacia
//{ path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Definimos los caminos
  { path: 'home', component: Home },
  { path: 'punto1', component: Punto1},
  { path: 'punto2', component: Punto2},
  { path: 'punto3', component: Punto3},

  // Manda al home si la ruta no existe
  // { path: '**', redirectTo: 'error404' }

];
