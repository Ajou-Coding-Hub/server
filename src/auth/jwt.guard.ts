import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh') {}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
