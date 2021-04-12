import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlhandoSeuPetPage } from './olhando-seu-pet.page';

const routes: Routes = [
  {
    path: '',
    component: OlhandoSeuPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlhandoSeuPetPageRoutingModule {}
