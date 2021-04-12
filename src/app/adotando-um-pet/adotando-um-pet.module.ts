import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdotandoUmPetPageRoutingModule } from './adotando-um-pet-routing.module';

import { AdotandoUmPetPage } from './adotando-um-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdotandoUmPetPageRoutingModule
  ],
  declarations: [AdotandoUmPetPage]
})
export class AdotandoUmPetPageModule {}
