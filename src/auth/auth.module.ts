import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: '1234', // TODO: 나중에 하겟삼 ㅋㄷㅋㄷ
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
    PrismaModule,
    HttpModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
