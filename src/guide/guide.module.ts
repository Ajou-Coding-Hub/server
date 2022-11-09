import { Module } from '@nestjs/common';
import { GuideResolvers } from './guide.resolvers';
import { GuideService } from './guide.service';
@Module({
  imports: [],
  providers: [GuideResolvers, GuideService],
})
export class GuideModule {}
