import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilsComponent } from './composants/acceuils/acceuils.component';
import { ListmaterielComponent } from './composants/informatiques/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/informatiques/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/informatiques/detailmateriel/detailmateriel.component';
import { CommentComponent } from './composants/commentaires/comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilsComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    CommentComponent,
    ContactComponent,
    Error404Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
