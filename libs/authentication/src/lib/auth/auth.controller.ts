import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  AuthenticationResponse,
  LocalRegisterRequest,
} from '@timeseries/authentication-api-interfaces';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { PasswordValidator } from './strategies/validators/password.validator';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private passwordValidator: PasswordValidator,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: any): Promise<AuthenticationResponse> {
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
    body: LocalRegisterRequest,
  ): Promise<AuthenticationResponse> {
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
