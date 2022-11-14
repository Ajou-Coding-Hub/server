import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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

  @Post('/')
  createWorkspace(@Req() req, @Body() { name }: { name: string }) {
    return this.workspaceService.createWorkspacePoc(req.user.id, name);
  }
}
