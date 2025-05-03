import * as request from 'supertest';
import { INestApplication } from "@nestjs/common"
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { ProjectRepository } from 'src/modules/projects/infra/project.repository';
import { InMemoryRepository } from 'src/shared/infra/in-memory.repository';

export class TestEnvironment {
    async setup() {
        const module = await Test.createTestingModule({
            imports: [AppModule] 
        })
        .overrideProvider(ProjectRepository).useValue(this.projectRepo)
        .compile();
    
        this.app = module.createNestApplication();
        await this.app.init();
    }

    request() {
        return request(this.app.getHttpServer())
    }

    teardown() {
        
    }

    private app: INestApplication;
    private projectRepo = InMemoryRepository<Project>
}