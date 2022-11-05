import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [AuthModule, GuideModule],
  providers: [VscodeGateway],
})
export class AppModule {}
