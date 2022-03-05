import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'game',
    loadChildren:() => import(`./modules/game/game.module`).then(m => m.GameModule)
  },
  {
    path: 'error',
    loadChildren:() => import(`./modules/error/error.module`).then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
