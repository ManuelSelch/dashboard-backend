export class ProjectListDto {
    id: number;
    
    name: string;
    description: string;
    slug: string;
    customer: number;

    links: Link[];
    logo: string;
    images: string[];

    taigaProject: number;
}