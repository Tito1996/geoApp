import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcobaAzulComponent } from './pages/alcoba-azul/alcoba-azul.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { GoToGourmetComponent } from './pages/go-to-gourmet/go-to-gourmet.component';
import { MonumentosComponent } from './pages/monumentos/monumentos.component';

const routes: Routes = [
  {
    path: '',
    component: GamePageComponent
  },
  {
    path: 'game2',
    component: AlcobaAzulComponent
  },
  {
    path: 'game3',
    component: MonumentosComponent
  },
  {
    path: 'game4',
    component: GoToGourmetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
