import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { TaskStatusEnum } from './enums/task-status.enum';
import { SaveTaskCommand } from './dto/save-task.command';
import { UpdateTaskCommand } from './dto/update-task.command';
import { v4 as uuid } from 'uuid';
import { TasksInfoDto } from './dto/task-info-dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    public taskRepository: Repository<TaskEntity>,
  ) {}

  async store(data: SaveTaskCommand) {
    const taskId = uuid()
    await this.taskRepository.insert({id: taskId, ...data});

    return new TasksInfoDto({id: taskId, ...data})
  }

  async update(id: string, data: UpdateTaskCommand) {
    const task = await this.taskRepository.findOneBy({ id: id });
    if (!task) {
      throw new BadRequestException('Task not found');
    }
    await this.taskRepository.update({ id: id }, data);

    const updatedTask = await this.taskRepository.findOneBy({ id: id });

    return new TasksInfoDto(updatedTask)
  }

  async delete(id: string) {
    const task = await this.taskRepository.findOneBy({ id: id });
    if (!task) {
      throw new BadRequestException('Task not found');
    }
    await this.taskRepository.delete(id);

    return id;
  }

  async find(name?: string, status?: TaskStatusEnum) {
    const result = await this.taskRepository.find({
      where: { name: name, status: status },
    })

    return result.map(task => new TasksInfoDto(task))
  }
}
