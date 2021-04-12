import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncontrandoSeuPetPage } from './encontrando-seu-pet.page';

const routes: Routes = [
  {
    path: '',
    component: EncontrandoSeuPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontrandoSeuPetPageRoutingModule {}
