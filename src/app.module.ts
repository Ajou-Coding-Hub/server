import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import path from 'path';

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
    GuideModule,
    WorkspaceModule,
    FeedbackModule,
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
          ? '.stage.env'
          : '.development.env',
      ),
      isGlobal: true,
    }),
  ],
  providers: [VscodeGateway],
  controllers: [AppController],
})
export class AppModule {}
