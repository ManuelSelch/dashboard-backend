import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [ProjectsModule, UploadsModule, TasksModule, HomeModule],
})
export class AppModule {}
