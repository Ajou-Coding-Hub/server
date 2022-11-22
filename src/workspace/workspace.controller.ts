import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { WorkspaceService } from './workspace.service';

@UseGuards(JwtAuthGuard)
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get('/')
  getWorkspaces(@Req() req) {
    return this.workspaceService.getWorkspaces(req.user.id);
  }

  @Delete('/:workspaceId')
  deleteWorkspace(@Req() req, @Param('workspaceId') workspaceId: string) {
    return this.workspaceService.deleteWorkspace(workspaceId);
  }

  @Post('/')
  createWorkspace(@Req() req, @Body() { name }: { name: string }) {
    return this.workspaceService.createWorkspace(req.user.id, name);
  }
}
