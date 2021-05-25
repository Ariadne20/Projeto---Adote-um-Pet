import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PetsComponent } from '../pets/pets.component';
import { ComponentePetsHomeComponent } from '../componente-pets-home/componente-pets-home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ComponentePetsHomeComponent]
})
export class HomePageModule {}
