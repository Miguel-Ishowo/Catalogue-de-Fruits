import { FruitsComponent } from './fruits/fruits.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  { path: 'acceuil', component: FruitsComponent },
  { path: 'acceuil/formulaire', component: AjoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }