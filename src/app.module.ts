import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, GuideModule],
  providers: [AppService, VscodeGateway],
  controllers: [AppController],
})
export class AppModule {}
