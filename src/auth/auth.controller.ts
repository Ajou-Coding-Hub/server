import { Controller, Body, Post } from '@nestjs/common';
import { AuthService, LoginResponse } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { accessToken }: Record<'accessToken', string>,
  ): Promise<LoginResponse> {
    return this.authService.login(accessToken);
  }
}
