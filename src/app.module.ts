import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, VscodeGateway],
})
export class AppModule {}
