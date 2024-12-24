import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { TaskStatusEnum } from '../enums/task-status.enum';

export class SaveTaskCommand {
  @ApiProperty({ example: 'name', description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'description', description: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ example: TaskStatusEnum.IN_PROGRESS, description: 'status' })
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;
}
