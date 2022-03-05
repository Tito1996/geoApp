import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faInfoCircle = faInfoCircle

  constructor() { }

  ngOnInit(): void {
  }

}
