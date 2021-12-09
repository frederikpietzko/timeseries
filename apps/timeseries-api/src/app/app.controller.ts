import { Controller, Get } from '@nestjs/common';

import { Message } from '@timeseries/timeseries-api-interfaces';

import { AppService } from './app.service';
import { AuthService } from '@timeseries/authentication';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
