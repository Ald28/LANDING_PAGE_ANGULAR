import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { NavegadorComponent } from './navegador/navegador.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'navegador', component: NavegadorComponent},
    { path: '', redirectTo:'/home', pathMatch: 'full'},
];
