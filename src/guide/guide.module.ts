import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { GuideResolvers } from './guide.resolvers';
import { GuideService } from './guide.service';
@Module({
  providers: [GuideResolvers, GuideService],
  imports: [PrismaModule],
})
export class GuideModule {}
