import { Component, OnInit } from '@angular/core';
import {Pet, PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pets-favoritos',
  templateUrl: './pets-favoritos.page.html',
  styleUrls: ['./pets-favoritos.page.scss'],
})
export class PetsFavoritosPage implements OnInit {

  public petsFavoritos: Pet[];

  constructor(private petService:PetsService) { 
    this.petsFavoritos = this.petService.petsFavoritos;
  }

  ngOnInit() {
  }

}
