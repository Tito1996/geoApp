import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './components/header/header.component';
import { EnigmasComponent } from './components/enigmas/enigmas.component';
import { Enigma1Component } from './components/enigmas/pages/enigma1/enigma1.component';
import { Enigma2Component } from './components/enigmas/pages/enigma2/enigma2.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EnigmasComponent,
    Enigma1Component,
    Enigma2Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    GoogleMapsModule,
  ],
  exports: [
    HeaderComponent,
    EnigmasComponent
  ]
})
export class SharedModule { }
