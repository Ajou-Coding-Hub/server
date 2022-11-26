import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: {
          log: ['info', 'query', 'error', 'warn'],
        },
        explicitConnect: false,
      }),
    }),
    AuthModule,
    UserModule,
    GuideModule,
    WorkspaceModule,
    FeedbackModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [VscodeGateway],
  controllers: [AppController],
})
export class AppModule {}
