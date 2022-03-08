import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enigma2',
  templateUrl: './enigma2.component.html',
  styleUrls: ['./enigma2.component.sass']
})
export class Enigma2Component implements OnInit {

  public cuenta:number = 3600;
  public minutos:number = 60;
  public mostrar:boolean = false;
  public no:boolean = false;

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.cuentaAtras(this.cuenta);
  }

  public cuentaAtras(cuenta:number) {
    this.minutos = Math.floor((cuenta-1) / 60 % 60);
    if(cuenta === 0) {
      this.mostrar = true;
    } else {
      this.cuenta--;
      setTimeout(() => {
        this.cuentaAtras(this.cuenta);
      }, 1000);
    }
  }

  public pastillaAzul(eleccion:string) {
    if (eleccion === 'no') {
      this.no = true;
    }
    if(eleccion === 'si') {
      this._router.navigate(['/game/game2']);
    }
  }
}
