import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './login.service';

@Injectable({ providedIn: 'root' })
export class LoginBloc {
  readonly email = new BehaviorSubject('');
  readonly password = new BehaviorSubject('');

  constructor(private loginService: AuthenticationService) {}

  public login() {
    this.loginService.login(this.email.value, this.password.value);
  }

  dispose() {
    this.email.complete();
    this.password.complete();
  }
}
