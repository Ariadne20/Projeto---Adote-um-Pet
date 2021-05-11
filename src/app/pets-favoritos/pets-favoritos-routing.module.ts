import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsFavoritosPage } from './pets-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: PetsFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsFavoritosPageRoutingModule {}
