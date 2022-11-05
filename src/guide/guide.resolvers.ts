import { Resolver, Query } from '@nestjs/graphql';
import { GuideService } from './guide.service';
import { Guide } from '@prisma/client';

@Resolver('Guide')
export class GuideResolvers {
  constructor(private readonly guideService: GuideService) {}

  @Query('guides')
  async posts(): Promise<Guide[]> {
    return this.guideService.findAll();
  }
}
