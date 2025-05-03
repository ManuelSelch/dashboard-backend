import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { UploadsModule } from './modules/uploads/uploads.module';

@Module({
  imports: [ProjectsModule, UploadsModule],
})
export class AppModule {}
