import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsFavoritosPageRoutingModule } from './pets-favoritos-routing.module';

import { PetsFavoritosPage } from './pets-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsFavoritosPageRoutingModule
  ],
  declarations: [PetsFavoritosPage]
})
export class PetsFavoritosPageModule {}
