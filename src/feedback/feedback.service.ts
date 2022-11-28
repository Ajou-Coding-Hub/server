import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  pagination(skip: number, take: number) {
    return this.prisma.feedback.findMany({
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  create(userId: number, createFeedbackDto: CreateFeedbackDto) {
    return this.prisma.feedback.create({
      data: {
        ownerId: userId,
        ...createFeedbackDto,
      },
    });
  }

  async like(userId: number, feedbackId: number) {
    return this.prisma.feedbackLike.create({
      data: {
        feedbackId,
        likerId: userId,
      },
    });
  }
}
