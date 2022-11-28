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

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getFeedback(@Query('skip') skip: number, @Query('take') take: number) {
    return this.feedbackService.pagination(skip, take);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(req.user.id, createFeedbackDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('like/:feedbackId')
  like(@Req() req, @Param('id') feedbackId: number) {
    return this.feedbackService.like(req.user.id, feedbackId);
  }
}
