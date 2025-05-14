import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectRepository } from './infra/project.repository';
import { CustomerRepository } from '../customers/infra/customer.repository';
import { TaskRepository } from './features/tasks/infra/task.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectRepository, CustomerRepository, TaskRepository]
})
export class ProjectsModule {}
