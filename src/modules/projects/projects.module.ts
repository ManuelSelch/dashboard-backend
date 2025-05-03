import { Module } from '@nestjs/common';
import { ProjectsController } from './api/projects.controller';
import { ProjectRepository } from './infra/project.repository';
import { CustomerRepository } from './infra/customer.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectRepository, CustomerRepository]
})
export class ProjectsModule {}
