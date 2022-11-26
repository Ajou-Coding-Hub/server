import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getHealthCheck(): string {
    return 'OK';
  }

  @Get('env')
  getEnv(): any {
    return process.env;
  }
}
