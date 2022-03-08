import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { SharedModule } from '@shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { AlcobaAzulComponent } from './pages/alcoba-azul/alcoba-azul.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonumentosComponent } from './pages/monumentos/monumentos.component';
import { GoToGourmetComponent } from './pages/go-to-gourmet/go-to-gourmet.component';


@NgModule({
  declarations: [
    GamePageComponent,
    AlcobaAzulComponent,
    MonumentosComponent,
    GoToGourmetComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
