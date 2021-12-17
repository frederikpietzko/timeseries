import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class LoginBloc {
  readonly email = new BehaviorSubject('');
  readonly password = new BehaviorSubject('');
  readonly emailValid: Observable<true | string> = this.email.pipe(
    map((email) => (email.includes('@') ? true : 'Invalid Email.')),
  );
  readonly authenticationValid = new BehaviorSubject<true | string>(true);

  constructor(private loginService: AuthenticationService) {}

  public login() {
    const loginStream = this.loginService.login(
      this.email.value,
      this.password.value,
    );
    loginStream.subscribe({
      error: this.loginError,
    });
    return loginStream;
  }

  private loginError(error: any): void {
    this.password.next('');
    this.authenticationValid.next(error?.message);
  }

  dispose() {
    this.email.complete();
    this.password.complete();
    this.authenticationValid.complete();
  }
}
