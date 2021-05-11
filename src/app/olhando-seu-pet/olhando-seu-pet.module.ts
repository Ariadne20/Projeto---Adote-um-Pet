import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlhandoSeuPetPageRoutingModule } from './olhando-seu-pet-routing.module';

import { OlhandoSeuPetPage } from './olhando-seu-pet.page';
import { PetsComponent } from '../pets/pets.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlhandoSeuPetPageRoutingModule
  ],
  declarations: [OlhandoSeuPetPage,PetsComponent]
})
export class OlhandoSeuPetPageModule {}
