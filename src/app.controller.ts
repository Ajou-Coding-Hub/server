import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getHealthCheck(): any {
    return process.env;
  }
}
