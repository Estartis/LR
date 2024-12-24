import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatusEnum } from "../enums/task-status.enum";

export class UpdateTaskCommand {
  @ApiProperty({ example: 'name', description: 'name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'description', description: 'description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: TaskStatusEnum.IN_PROGRESS, description: 'status' })
  @IsOptional()
  @IsEnum(TaskStatusEnum)
  status?: TaskStatusEnum;
}
