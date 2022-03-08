import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monumentos',
  templateUrl: './monumentos.component.html',
  styleUrls: ['./monumentos.component.sass']
})
export class MonumentosComponent implements OnInit {

  public formFotos: FormGroup = new FormGroup({ });

  public acierto:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.formFotos = new FormGroup(
      {
        pass: new FormControl('', [
          Validators.required
        ]),
      }
    )
  }

  public next() {
    if (this.formFotos.get('pass')?.value === '4zul') {
      this.acierto = true;
    }
  }
}
