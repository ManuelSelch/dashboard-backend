import { Controller, Get, Param } from '@nestjs/common';
import { ProjectRepository } from '../infra/project.repository';
import { CustomerRepository } from '../infra/customer.repository';

@Controller('projects')
export class ProjectsController {
    constructor(
        private projectRepo: ProjectRepository,
        private customerRepo: CustomerRepository
    ) {}

    @Get("/")
    async findAll() {
        const projects = await this.projectRepo.findAll();
        return await Promise.all(
            projects.map(async o => ({...o, customer: await this.customerRepo.findById(o.customer)}))
        )
    }

    @Get("/:id")
    async find(@Param("id") id: number) {
        return await this.projectRepo.findById(1);
    }
}
