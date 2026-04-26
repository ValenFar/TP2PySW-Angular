import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Agencias } from './pages/agencias/agencias';
import { Destinos } from './pages/destinos/destinos';
import { Blog } from './pages/blog/blog';
import { Contacto } from './pages/contacto/contacto';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
// Manda al home si la ruta esta vacia
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Definimos los caminos
  { path: 'home', component: Home },
  { path: 'agencias', component: Agencias },
  { path: 'destinos', component: Destinos },
  { path: 'blog', component: Blog },
  { path: 'contacto', component: Contacto },

  // Manda al home si la ruta no existe
  { path: '**', redirectTo: 'error404' }

];
