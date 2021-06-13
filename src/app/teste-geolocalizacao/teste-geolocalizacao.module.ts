import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteGeolocalizacaoPageRoutingModule } from './teste-geolocalizacao-routing.module';

import { TesteGeolocalizacaoPage } from './teste-geolocalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteGeolocalizacaoPageRoutingModule
  ],
  declarations: [TesteGeolocalizacaoPage]
})
export class TesteGeolocalizacaoPageModule {}
