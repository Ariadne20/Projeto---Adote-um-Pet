import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontrandoSeuPetPageRoutingModule } from './encontrando-seu-pet-routing.module';

import { EncontrandoSeuPetPage } from './encontrando-seu-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontrandoSeuPetPageRoutingModule
  ],
  declarations: [EncontrandoSeuPetPage]
})
export class EncontrandoSeuPetPageModule {}
