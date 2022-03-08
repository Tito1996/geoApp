import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '@shared/services/game.service';

@Component({
  selector: 'app-alcoba-azul',
  templateUrl: './alcoba-azul.component.html',
  styleUrls: ['./alcoba-azul.component.sass']
})
export class AlcobaAzulComponent implements OnInit {

  public formPrueba3:FormGroup = new FormGroup({});
  public formulari:FormGroup = new FormGroup({});

  public posicion = {
    lat: 0,
    lng: 0
  }

  public prueba3:boolean = true;
  public prueba4:boolean = false;
  public prueba5:boolean = false;
  public acierto:boolean = false;
  public error:boolean = false;

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this.formPrueba3 = new FormGroup(
      {
        inputPrueba3: new FormControl('', [
          Validators.required
        ])
      }
    );
    this.formulari = new FormGroup(
      {
        pregunta1: new FormControl('', [
          Validators.required
        ]),
        pregunta2: new FormControl('', [
          Validators.required
        ]),
        pregunta3: new FormControl('', [
          Validators.required
        ]),
        pregunta4: new FormControl('', [
          Validators.required
        ]),
        pregunta5: new FormControl('', [
          Validators.required
        ]),
        pregunta6: new FormControl('', [
          Validators.required
        ]),
      }
    );
  }

  public contesta() {
    if(this.formPrueba3.get('inputPrueba3')?.value === 'mathom' || this.formPrueba3.get('inputPrueba3')?.value === 'galeries malda') {
      this.acierto = true;
      this.prueba4 = true;
      this.error = false;
    } else this.error = true;
  }

  public contestaFormulari() {
    console.log(
      this.formulari.get('pregunta1')?.value, 
      this.formulari.get('pregunta2')?.value, 
      this.formulari.get('pregunta3')?.value, 
      this.formulari.get('pregunta4')?.value, 
      this.formulari.get('pregunta5')?.value, 
      this.formulari.get('pregunta6')?.value
    );
    if(
      this.formulari.get('pregunta1')?.value === '2' &&
      this.formulari.get('pregunta2')?.value === 'revolucion 1828' &&
      this.formulari.get('pregunta3')?.value === 'steampunk' &&
      this.formulari.get('pregunta4')?.value === 'zoro' &&
      this.formulari.get('pregunta5')?.value === 'ravenclaw' &&
      (this.formulari.get('pregunta6')?.value === 'kakaroto' ||
      this.formulari.get('pregunta6')?.value === 'kakarotto')
    ) {
      this.acierto = true;
      this.error = false;
    } else this.error = true;
  }

  public comprobarUbicacion() {
    const mathom = {
      lat: 41.3828547520356,
      lng: 2.1734920947154532
    }
    this.getLocation();
    if(this.posicion.lat === mathom.lat && this.posicion.lng === mathom.lng) {
      this.prueba3 = false;
      this.prueba4 = false;
      this.prueba5 = true;
      this.acierto = false;
      this.error = false;
    } else this.error = true;
  }

  private getLocation() {
    this._gameService.getPosition().then(pos => {
      this.posicion.lat = pos.lat;
      this.posicion.lng  = pos.lng;
    });
  }
}
