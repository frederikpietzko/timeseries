import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { PasswordValidator } from './validators/password.validator';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private passwordValidator: PasswordValidator,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return req.user;
  }

  @Post('auth/register')
  async register(
    @Body()
    body: {
      email?: string;
      password?: string;
      firstname?: string;
      lastname?: string;
    },
  ) {
    if (!(body.email && body.password)) {
      throw new BadRequestException('missing email or password');
    }

    if (!this.passwordValidator.validatePasswordRestrictions(body.password)) {
      throw new BadRequestException('Invalid password.');
    }

    const user = await this.userService.createLocalUser(
      body.email,
      body.password,
      body.firstname,
      body.lastname,
    );
    return this.authService.login(user);
  }
}
