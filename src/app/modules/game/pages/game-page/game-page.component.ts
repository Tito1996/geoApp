import { Component, OnInit } from '@angular/core';
import { GameService } from '@shared/services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass']
})
export class GamePageComponent implements OnInit {

  public latitude: any = 0;
  public longitude: any = 0;

  public position = {
    lat: this.latitude,
    lng: this.longitude
  }
  public casa = {
    lat: 41.38096630596837, 
    lng: 2.179189074799403 
  }

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  getLocation() {
    this._gameService.getPosition().then(pos => {
      this.position.lat = pos.lat;
      this.position.lng  = pos.lng;
    })
  }

}
