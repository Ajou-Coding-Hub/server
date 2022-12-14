import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports: [JwtModule],
})
export class FeedbackModule {}
