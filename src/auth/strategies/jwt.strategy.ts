import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

interface JwtPayload {
  userId: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '1234', // TODO: 나중 ㅋㅋ
    });
  }

  async validate({ userId }: JwtPayload) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  }
}
