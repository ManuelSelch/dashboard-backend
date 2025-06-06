import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectRepository } from './infra/project.repository';
import { CustomerRepository } from '../customers/infra/customer.repository';
import { ProjectListDto } from './api/project-list.dto';
import { ProjectDetailDto } from './api/project-detail.dto';
import { TaskRepository } from './features/tasks/infra/task.repository';

@Controller('projects')
export class ProjectsController {
    constructor(
        private projectRepo: ProjectRepository,
        private customerRepo: CustomerRepository,
        private taskRepo: TaskRepository
    ) {}

    @Get("/")
    async findAll(@Query("customer") customer?: number): Promise<ProjectListDto[]> {
        let projects = await this.projectRepo.findAll();
        if(customer) 
            projects = projects.filter(p => p.customer == customer)
        
        return projects;
    }

    @Get("/:slug")
    async find(@Param("slug") slug: string): Promise<ProjectDetailDto> {
        const project = (await this.projectRepo.findAll()).find(p => p.slug == slug);
        if(!project)
            throw new BadRequestException("project not found");

        const tasks = await this.taskRepo.findAll();
        return {
            ...project,
            tasks: tasks.filter(t => t.project === project.slug)
        };
    }
}
