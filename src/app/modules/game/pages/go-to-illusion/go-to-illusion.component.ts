import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-go-to-illusion',
  templateUrl: './go-to-illusion.component.html',
  styleUrls: ['./go-to-illusion.component.sass']
})
export class GoToIllusionComponent implements OnInit {
  
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
    if (this.formWordle.get('pass')?.value === 'wordle') {
      this.acierto = true;
    }
  }

}
