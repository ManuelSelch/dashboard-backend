import { TaskDto } from "src/modules/projects/features/tasks/api/task.dto";

export class ProjectDetailDto {
    id: number;
    
    name: string;
    description: string;
    slug: string;
    customer: number;

    links: Link[];
    logo: string;
    images: string[];

    taigaProject: number;

    tasks: TaskDto[]
}