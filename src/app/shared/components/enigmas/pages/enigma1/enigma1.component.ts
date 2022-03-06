import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '@shared/services/game.service';

@Component({
  selector: 'app-enigma1',
  templateUrl: './enigma1.component.html',
  styleUrls: ['./enigma1.component.sass']
})
export class Enigma1Component implements OnInit {

  @Output() nextEvent = new EventEmitter<boolean>();

  public miPosicion = {
    lat: 0,
    lng: 0
  }

  public posicionAmatller = {
    lat: 41.39155676425097, 
    lng: 2.1650081219379
  }

  public acierto:boolean = false;
  public fallo:boolean = false;

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
  }

  public comprobarCoord() {
    this.getLocation();
    setTimeout(() => {
      if (this.miPosicion.lat === 41.3907285 && this.
        miPosicion.lng === 2.1745089) {
          this.acierto = true;
        } else this.acierto = false;
    }, 500);
  }

  private getLocation() {
    this._gameService.getPosition().then(pos => {
      this.miPosicion.lat = pos.lat;
      this.miPosicion.lng  = pos.lng;
    })
  }

  public goToNext() {
    this.nextEvent.emit(true);
  }
}
