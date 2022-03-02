import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }
    )
  }

  sendLogin(): void {
    console.debug(this.formLogin.value);
  }

}
