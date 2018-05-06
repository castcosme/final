import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//import user
import { HomeComponent } from './components/home.component';
import { UserEditComponent } from './components/user-edit.component';
import { UsuariosGetComponent } from './components/get-usuarios-registrados.component';
import { UsuarioEditComponent } from './components/editar-user.component';
import { SendEmailTokenComponent } from './components/send-email-token.component';
import { ConsolaComponent } from './components/ver-consolas.component';
import { AddConsolaComponent } from './components/agregar-consola.component';

import { VideojuegosGetComponent } from './components/get-videojuegos.component';
import { VideojuegoCreateComponent } from './components/create-videojuego.component';
import { AccesoriosGetComponent } from './components/get-accesorios.component';
import { AccesorioCreateComponent } from './components/create-accesorio.component';
import { CarritoGetComponent } from './components/get-carrito.component';
import { VentasComponent } from './components/get-ventas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'inicio', component: HomeComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'ver-usuarios', component: UsuariosGetComponent},
  {path: 'editar-usuario/:idUser', component: UsuarioEditComponent},
	{path: 'enviar-token', component: SendEmailTokenComponent},
	{path: 'ver-consolas', component: ConsolaComponent},
	{path: 'agregar-consola', component: AddConsolaComponent},
	{path: 'ver-videojuegos', component: VideojuegosGetComponent},
	{path: 'agregar-videojuego', component: VideojuegoCreateComponent},
	{path: 'ver-accesorios', component: AccesoriosGetComponent},
	{path: 'agregar-accesorio', component: AccesorioCreateComponent},
	{path: 'ver-carrito', component: CarritoGetComponent},	
	{path: 'ver-ventas', component: VentasComponent},	
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
