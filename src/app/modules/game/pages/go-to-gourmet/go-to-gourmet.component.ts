import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-gourmet',
  templateUrl: './go-to-gourmet.component.html',
  styleUrls: ['./go-to-gourmet.component.sass']
})
export class GoToGourmetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pausa() {
    return new Date().getHours() >= 15;
  }
}
