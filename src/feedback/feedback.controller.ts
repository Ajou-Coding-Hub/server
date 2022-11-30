import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Query,
  Param,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly feedbackService: FeedbackService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getFeedback(
    @Req() req,
    @Query('skip') skip: number,
    @Query('take') take: number,
  ) {
    let userId = undefined;
    if (req.headers?.authorization) {
      userId = (
        this.jwtService.decode(
          req.headers.authorization.split(' ')?.[1],
        ) as Record<'userId', number>
      ).userId;
    }
    return this.feedbackService.pagination(skip, take, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(req.user.id, createFeedbackDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('like/:feedbackId')
  like(@Req() req, @Param('feedbackId') feedbackId: number) {
    return this.feedbackService.like(req.user.id, feedbackId);
  }
}
