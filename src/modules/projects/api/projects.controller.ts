import { Controller, Get } from '@nestjs/common';
import { ProjectRepository } from '../infra/project.repository';

@Controller('projects')
export class ProjectsController {
    constructor(private projectRepo: ProjectRepository) {}

    @Get("/")
    async findAll() {
        return []
    }
}
