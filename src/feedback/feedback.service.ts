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
      include: {
        owner: true,
        feedbackLikes: true,
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
    if (
      await this.prisma.feedbackLike.findUnique({
        where: {
          likerId_feedbackId: {
            feedbackId,
            likerId: userId,
          },
        },
      })
    ) {
      return this.prisma.feedbackLike.delete({
        where: {
          likerId_feedbackId: {
            feedbackId,
            likerId: userId,
          },
        },
      });
    }
    return this.prisma.feedbackLike.create({
      data: {
        feedbackId,
        likerId: userId,
      },
    });
  }
}
