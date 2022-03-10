import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to-illusion',
  templateUrl: './go-to-illusion.component.html',
  styleUrls: ['./go-to-illusion.component.sass']
})
export class GoToIllusionComponent implements OnInit {
  
  public formWordle:FormGroup = new FormGroup({});
  public formIlusion:FormGroup = new FormGroup({});
  public acierto:boolean = false

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.formWordle = new FormGroup(
      {
        pass: new FormControl('', [
          Validators.required
        ]),
      }
    );
    this.formIlusion = new FormGroup(
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
  public ilusion() {
    if (this.formWordle.get('pass')?.value === 'wordle') {
      this._router.navigate(['/ilusion']);
    }
  }

}
