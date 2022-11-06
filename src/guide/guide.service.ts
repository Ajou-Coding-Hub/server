import { Injectable } from '@nestjs/common';
import { Guide } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class GuideService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Guide[]> {
    return this.prisma.guide.findMany({});
  }
}
