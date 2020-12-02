import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilsComponent } from './composants/acceuils/acceuils.component';
import { ListmaterielComponent } from './composants/informatiques/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/informatiques/materiel/materiel.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilsComponent,
    ListmaterielComponent,
    MaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
