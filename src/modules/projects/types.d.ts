declare type Project = {
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

declare type Link = {
    name: string;
    url: string;
}

declare type Customer = {
    id: number;
    name: string;
}