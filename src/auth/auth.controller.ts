import { Controller, Body, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService, LoginResponse } from './auth.service';
import { JwtAuthGuard, JwtRefreshAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { accessToken }: Record<'accessToken', string>,
  ): Promise<LoginResponse> {
    return this.authService.login(accessToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('github')
  async github(
    @Req() req,
    @Body() { code }: Record<'code', string>,
  ): Promise<Record<'accessToken', string>> {
    return this.authService.createGithubAccessToken(req.user.id, code);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  async refresh(@Req() req): Promise<Record<'token', string>> {
    const token = await this.authService.getToken(req.user.id);
    return { token };
  }
}
