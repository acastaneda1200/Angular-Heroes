import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//servicios
import { HeroesService } from "./services/heroes.service";
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';
import { BuscarTextoComponent } from './components/buscar-texto/buscar-texto.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    BuscarTextoComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING 
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
