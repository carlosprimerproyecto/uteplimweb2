import { Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { NuevoAfiliadoComponent } from './nuevo-afiliado/nuevo-afiliado.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/ingreso'},
    { path: 'ingreso', pathMatch: 'full', component:IngresoComponent},
    //{ path: 'bandeja', component:BandejaPrincipalComponent,...canActivate(()=>redirectUnauthorizedTo(['/ingreso']))},
    { path: 'nuevo', component:NuevoAfiliadoComponent,...canActivate(()=>redirectUnauthorizedTo(['/ingreso']))},
    //{ path: 'ver', component:VerComponent,...canActivate(()=>redirectUnauthorizedTo(['/ingreso']))},
];


