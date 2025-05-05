import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { HomeModule } from './modules/home/home.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [ProjectsModule, TasksModule, HomeModule, CustomersModule],
})
export class AppModule {}
