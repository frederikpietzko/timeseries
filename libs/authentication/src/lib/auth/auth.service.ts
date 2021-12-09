import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { UserSource } from '../user/user-source';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);

    if (
      user &&
      user.userSource === UserSource.LOCAL &&
      (await bcrypt.compare(password, user.password!))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
