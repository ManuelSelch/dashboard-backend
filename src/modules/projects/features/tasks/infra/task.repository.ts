import { Injectable } from "@nestjs/common";
import { JsonRepository } from "src/shared/infra/json.repository";

@Injectable()
export class TaskRepository extends JsonRepository<Task> {
    constructor() {
        super("./data/tasks.json")
    }
}
