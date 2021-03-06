import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilsComponent } from './composants/acceuils/acceuils.component';
import { DetailmaterielComponent } from './composants/informatiques/detailmateriel/detailmateriel.component';
import { ListmaterielComponent } from './composants/informatiques/listmateriel/listmateriel.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
{path:'accueil', component:AcceuilsComponent},
{path:'listmateriel', component:ListmaterielComponent},
{path:'contact', component:ContactComponent},
{path:'listmateriel/:id', component:DetailmaterielComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
