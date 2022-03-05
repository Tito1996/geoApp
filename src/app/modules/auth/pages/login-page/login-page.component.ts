import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  correctUser: boolean = true;
  formLogin: FormGroup = new FormGroup({});

  constructor( private _loginService: AuthService,
               private _router: Router) { }

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
    const {name, password} = this.formLogin.value;
    if(this._loginService.sendCredentials(name, password)) {
      this._router.navigate(['/home']);
    } else this.correctUser = false;
  }

}
