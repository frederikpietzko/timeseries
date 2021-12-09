import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordValidator {
  validatePasswordRestrictions(password: string) {
    return password && password.length > 8;
  }
}
