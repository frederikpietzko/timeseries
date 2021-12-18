import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  concatAll,
  map,
  Observable,
} from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { ValidationService } from '../validation/validation.service';

@Injectable({ providedIn: 'root' })
export class RegisterBloc {
  readonly email = new BehaviorSubject('');
  readonly emailValid: Observable<true | string> = this.email.pipe(
    map(this.validationService.validateEmail),
  );

  readonly password = new BehaviorSubject('');
  readonly passwordValid: Observable<true | string> = this.password.pipe(
    map(this.validationService.validatePassword),
  );

  readonly repeatedPassword = new BehaviorSubject('');
  readonly passwordsMatch: Observable<true | string> = combineLatest([
    this.password,
    this.repeatedPassword,
  ]).pipe(
    map(([password, repeatedPassword]) =>
      this.validationService.passwordsMatch(password, repeatedPassword),
    ),
  );

  readonly firstname = new BehaviorSubject('');
  readonly firstnameValid: Observable<true | string> = this.firstname.pipe(
    map(this.validationService.notEmpty),
  );

  readonly lastname = new BehaviorSubject('');
  readonly lastnameValid: Observable<true | string> = this.lastname.pipe(
    map(this.validationService.notEmpty),
  );

  readonly registrationValid = combineLatest([
    this.emailValid,
    this.passwordValid,
    this.passwordsMatch,
    this.firstnameValid,
    this.lastnameValid,
  ]).pipe(
    map(([...validationResults]) =>
      validationResults.every((val) => val === true),
    ),
  );

  constructor(
    private authService: AuthenticationService,
    private validationService: ValidationService,
  ) {}

  public register() {
    return combineLatest([
      this.registrationValid,
      this.email,
      this.password,
      this.firstname,
      this.lastname,
    ]).pipe(
      map(([isValid, email, password, firstname, lastname]) => {
        if (!isValid) {
          throw new Error('Form Invalid.');
        }
        return this.authService.register(email, password, firstname, lastname);
      }),
      concatAll(),
    );
  }

  dispose() {
    this.email.complete();
    this.password.complete();
    this.repeatedPassword.complete();
    this.firstname.complete();
    this.lastname.complete();
  }
}
