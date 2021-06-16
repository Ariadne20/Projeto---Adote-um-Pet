import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule)
  },
  {
    path: 'encontrando-seu-pet',
    loadChildren: () => import('./encontrando-seu-pet/encontrando-seu-pet.module').then( m => m.EncontrandoSeuPetPageModule)
  },
  {
    path: 'olhando-seu-pet',
    loadChildren: () => import('./olhando-seu-pet/olhando-seu-pet.module').then( m => m.OlhandoSeuPetPageModule)
  },
  {
    path: 'adotando-um-pet',
    loadChildren: () => import('./adotando-um-pet/adotando-um-pet.module').then( m => m.AdotandoUmPetPageModule)
  },
  {
    path: 'pets-favoritos',
    loadChildren: () => import('./pets-favoritos/pets-favoritos.module').then( m => m.PetsFavoritosPageModule)
  },
  {
    path: 'teste-geolocalizacao',
    loadChildren: () => import('./teste-geolocalizacao/teste-geolocalizacao.module').then( m => m.TesteGeolocalizacaoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
