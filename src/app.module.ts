import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [AuthModule, GuideModule],
  controllers: [AppController],
  providers: [AppService, VscodeGateway],
})
export class AppModule {}
