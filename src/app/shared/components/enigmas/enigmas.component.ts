import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigmas',
  templateUrl: './enigmas.component.html',
  styleUrls: ['./enigmas.component.sass']
})
export class EnigmasComponent implements OnInit {

  public prueba1: boolean = true;
  public prueba2: boolean = false;

  @Input() posicion = {
    lat:0 ,
    lng:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event: boolean) {
    this.prueba2 = $event;
    if(this.prueba2) this.prueba1 = false;
  }

}
