import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getSelf(@Req() req) {
    return this.userService.findOne(req.user.id);
  }

  @Get('/github')
  getGithub(@Req() req) {
    return this.userService.findOneByIdForGithub(req.user.id);
  }
}
