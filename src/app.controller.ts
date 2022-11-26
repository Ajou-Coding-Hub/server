import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getHealthCheck(): any {
    return {
      GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
      GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    };
  }
}
