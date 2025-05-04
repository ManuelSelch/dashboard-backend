import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [ProjectsModule, UploadsModule, TasksModule],
})
export class AppModule {}
