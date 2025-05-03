import { Injectable } from "@nestjs/common";
import { JsonRepository } from "src/shared/infra/json.repository";

@Injectable()
export class ProjectRepository extends JsonRepository<Project> {
    constructor() {
        super("./data/projects.json")
    }
}
