import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private name: string = 'paula';
  private password: string = 'aniversari';

  constructor() { }

  sendCredentials(name: string, password:string): boolean {
    return name === this.name && password === this.password;
  }
}
