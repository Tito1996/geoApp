import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'game',
    loadChildren:() => import(`./modules/game/game.module`).then(m => m.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
