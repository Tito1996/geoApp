import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IlusionRoutingModule } from './ilusion-routing.module';
import { GoToMeriendarComponent } from './pages/go-to-meriendar/go-to-meriendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    GoToMeriendarComponent
  ],
  imports: [
    CommonModule,
    IlusionRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class IlusionModule { }
