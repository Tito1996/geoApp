import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { SharedModule } from '@shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class GameModule { }
