import { Component, OnInit } from '@angular/core';
import { GameService } from '@shared/services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass']
})
export class GamePageComponent implements OnInit {

  public latitude: any;
  public longitude: any;

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  getLocation() {
    this._gameService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    })
  }

}
