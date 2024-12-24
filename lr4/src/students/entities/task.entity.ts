import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TaskStatusEnum } from '../enums/task-status.enum';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    comment: 'Имя задачи',
  })
  name: string;

  @Column({
    type: 'varchar',
    comment: 'Описание',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatusEnum,
    comment: 'Статус задачи',
  })
  status: TaskStatusEnum;

  @CreateDateColumn({ default: 'now()' })
  createdAt?: Date;

  @UpdateDateColumn({ default: 'now()' })
  updatedAt?: Date;
}
