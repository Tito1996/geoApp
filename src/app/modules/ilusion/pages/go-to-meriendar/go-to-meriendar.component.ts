import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-go-to-meriendar',
  templateUrl: './go-to-meriendar.component.html',
  styleUrls: ['./go-to-meriendar.component.sass']
})
export class GoToMeriendarComponent implements OnInit {

  public formWordle:FormGroup = new FormGroup({});
  public acierto:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.formWordle = new FormGroup(
      {
        pass: new FormControl('', [
          Validators.required
        ]),
      }
    )
  }
  
  public wordle() {
    if (this.formWordle.get('pass')?.value === 'vendetta') {
      this.acierto = true;
    }
  }

}
