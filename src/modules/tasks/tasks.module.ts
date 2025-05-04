import { Module } from '@nestjs/common';
import { TasksController } from './api/tasks.controller';
import { TaskRepository } from './infra/task.repository';

@Module({
  controllers: [TasksController],
  providers: [TaskRepository]
})
export class TasksModule {}
