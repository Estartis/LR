import { TaskEntity } from '../entities/task.entity';
import { TaskStatusEnum } from '../enums/task-status.enum';

export class TasksInfoDto {
  id: string;
  name: string;
  desctiption: string;
  status: TaskStatusEnum;

  constructor(data: TaskEntity) {
    this.id = data.id;
    this.name = data.name;
    this.desctiption = data.description;
    this.status = data.status;
  }
}
