import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskRepository } from '../infra/task.repository';
import { CreateTaskDto } from './create-task.dto';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
    constructor(
        private taskRepo: TaskRepository
    ) {}

    @Get("/")
    async findAll(): Promise<TaskDto[]> {
        return await this.taskRepo.findAll();
    }

    @Post("/")
    async create(@Body() task: CreateTaskDto) {
        await this.taskRepo.create({
            name: task.name,
            project: task.project,
            status: "ready"
        })
    }
}
