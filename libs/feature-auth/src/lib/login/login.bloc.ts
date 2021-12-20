import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { ValidationService } from '../validation/validation.service';

@Injectable({ providedIn: 'root' })
export class LoginBloc {
  readonly email = new BehaviorSubject('');
  readonly emailValid: Observable<true | string> = this.email.pipe(
    map(this.validationService.validateEmail),
  );

  readonly password = new BehaviorSubject('');
  readonly passwordValid: Observable<true | string> = this.password.pipe(
    map(this.validationService.notEmpty),
  );

  readonly authenticationValid = combineLatest([
    this.emailValid,
    this.passwordValid,
  ]).pipe(
    map(([...validationResults]) =>
      validationResults.every((val) => val === true),
    ),
  );

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
  }

  dispose() {
    this.email.complete();
    this.password.complete();
  }
}
