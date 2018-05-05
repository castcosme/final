import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTableModule } from 'angular2-datatable';

import { HomeComponent } from './components/home.component';
import { UserEditComponent } from './components/user-edit.component';
import { UsuariosGetComponent } from './components/get-usuarios-registrados.component';
import { UsuarioEditComponent } from './components/editar-user.component';
import { SendEmailTokenComponent } from './components/send-email-token.component';
import { ConsolaComponent } from './components/ver-consolas.component';
import { AddConsolaComponent } from './components/agregar-consola.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserEditComponent,
    UsuariosGetComponent,
    UsuarioEditComponent,
    SendEmailTokenComponent,
    ConsolaComponent,
    AddConsolaComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
