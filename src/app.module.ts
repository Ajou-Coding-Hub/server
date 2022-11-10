import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';

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
    ProjectModule
  ],
  providers: [AppService, VscodeGateway],
  controllers: [AppController],
})
export class AppModule {}
