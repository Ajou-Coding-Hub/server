import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Guide } from '@prisma/client';
@Injectable()
export class GuideService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Guide[]> {
    return this.prisma.guide.findMany({});
  }
}
