import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteGeolocalizacaoPage } from './teste-geolocalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: TesteGeolocalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteGeolocalizacaoPageRoutingModule {}
