import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdotandoUmPetPage } from './adotando-um-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AdotandoUmPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdotandoUmPetPageRoutingModule {}
