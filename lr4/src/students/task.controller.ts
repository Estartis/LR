import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { UpdateTaskCommand } from './dto/update-task.command';
import { TaskService } from './task.service';
import { SaveTaskCommand } from './dto/save-task.command';
import { TaskStatusEnum } from './enums/task-status.enum';

@Controller('task')
export class TaskController {
  constructor(public readonly taskService: TaskService) {}
  @Get('list')
  async list(@Query('status') status?: TaskStatusEnum, @Query('name') name?: string) {
    return this.taskService.find(name, status);
  }

  @Patch('update')
  async update(
    @Query('id') id: string,
    @Body() command: UpdateTaskCommand
  ) {
    return this.taskService.update(id, command);
  }

  @Delete('delete')
  async delete(@Query('id') id: string) {
    await this.taskService.delete(id);
    return true;
  }

  @Post('store')
  async store(
    @Body() command: SaveTaskCommand
  ) {
    return this.taskService.store(command);
  }
}
