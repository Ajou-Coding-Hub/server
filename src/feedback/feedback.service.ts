import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  pagination(cursor: number, userId?: number) {
    return this.prisma.feedback.findMany({
      skip: cursor > 0 ? 1 : 0,
      take: 10,
      ...(cursor && { cursor: { id: cursor } }),
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        _count: {
          select: {
            feedbackLikes: true,
          },
        },
        id: true,
        content: true,
        createdAt: true,
        owner: true,
        feedbackLikes: {
          where: {
            likerId: userId,
          },
        },
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
    const isLike = await this.prisma.feedbackLike.findUnique({
      where: {
        likerId_feedbackId: {
          feedbackId,
          likerId: userId,
        },
      },
    });
    if (isLike) {
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
