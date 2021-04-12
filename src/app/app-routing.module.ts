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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
