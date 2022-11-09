import { Controller, Body, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService, LoginResponse } from './auth.service';
import { JwtRefreshAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { accessToken }: Record<'accessToken', string>,
  ): Promise<LoginResponse> {
    return this.authService.login(accessToken);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  async refresh(@Req() req): Promise<Record<'token', string>> {
    const token = await this.authService.getToken(req.user.userId);
    return { token };
  }
}
