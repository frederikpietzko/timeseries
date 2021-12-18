import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { ValidationService } from '../validation/validation.service';

@Injectable({ providedIn: 'root' })
export class LoginBloc {
  readonly email = new BehaviorSubject('');
  readonly password = new BehaviorSubject('');
  readonly emailValid: Observable<true | string> = this.email.pipe(
    map(
      (email) =>
        this.validationService.validateEmail(email) || 'Invalid Email.',
    ),
  );
  readonly authenticationValid = new BehaviorSubject<true | string>(true);

  constructor(
    private authService: AuthenticationService,
    private validationService: ValidationService,
  ) {}

  public login() {
    const loginStream = this.authService.login(
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
