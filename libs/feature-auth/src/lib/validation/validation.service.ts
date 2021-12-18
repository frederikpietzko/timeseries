import { Injectable } from '@angular/core';
import _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateEmail(email: string | null | undefined): true | string {
    return email?.includes('@') ? true : 'Invalid Email.';
  }

  validatePassword(password: string | null | undefined): true | string {
    return (password ?? '').length > 5 || 'Password to short.';
  }

  passwordsMatch(
    password: string | null | undefined,
    repeatedPassword: string | null | undefined,
  ): true | string {
    return _.eq(password, repeatedPassword) || "Passwords don't match.";
  }

  notEmpty(value: string | null | undefined): true | string {
    return !!value || 'Required.';
  }
}
