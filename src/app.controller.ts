import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import JwtAuthenticationGuard from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Jwt Test
  @UseGuards(JwtAuthenticationGuard)
  @Post('test')
  test(): string {
    return this.appService.getHello();
  }
}
