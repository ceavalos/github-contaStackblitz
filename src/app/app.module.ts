import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//componentes de la aplicacion
import { AppComponent } from './app.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { PartidasComponent } from './componentes/partidas/partidas.component';


//importaciones de primefaces de primefaces
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    CatalogoComponent,
    PartidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ButtonModule,
    RippleModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
