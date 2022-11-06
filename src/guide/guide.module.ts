import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { GuideResolvers } from './guide.resolvers';
import { GuideService } from './guide.service';
@Module({
  imports: [PrismaModule],
  providers: [GuideResolvers, GuideService],
})
export class GuideModule {}
