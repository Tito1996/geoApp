import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnigmasComponent } from './components/enigmas/enigmas.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EnigmasComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    EnigmasComponent
  ]
})
export class SharedModule { }
