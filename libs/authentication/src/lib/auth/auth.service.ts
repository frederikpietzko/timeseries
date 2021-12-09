import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserSource } from '../user/user-source';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtPayload } from './models/jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

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

  async login(user: User) {
    const payload: JwtPayload = {
      email: user.email,
      userId: user.id,
      userSource: user.userSource,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
