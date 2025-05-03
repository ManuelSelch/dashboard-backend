import { Module } from '@nestjs/common';
import { ProjectsController } from './api/projects.controller';
import { ProjectRepository } from './infra/project.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectRepository]
})
export class ProjectsModule {}
