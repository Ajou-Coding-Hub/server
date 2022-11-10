import {Controller, Get, Post, Query, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Jwt Test
  @UseGuards(JwtAuthGuard)
  @Post('test')
  test(): string {
    return this.appService.getHello();
  }


  @Get('createWorkspace')
  createWorkspace(@Query('workspaceName') workspaceName) {
    return this.appService.createWorkspacePoc(workspaceName);
  }
}
