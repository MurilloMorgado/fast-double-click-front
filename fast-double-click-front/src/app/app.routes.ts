import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ResultadoComponent } from './views/resultado/resultado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resultado', component: ResultadoComponent }
];
