import { Controller, Get } from '@nestjs/common';
import { SkillDto } from './api/skill.dto';


const skills: Skill[] = [
    {name: "native iOS Apps", tools: ["Swift"]},
    {name: "Website Frontend & Backend", tools: ["HTML", "CSS", "JS", "TypeScript", "PHP", "SQL"]},
    {name: "Microcontroller & IoT Systeme mit App Anbindung", tools: ["Arduino C", "C#", "Java"]},
    {name: "Server Management", tools: ["Proxmox"]}
]

const about: string = `
Hey ich bin Manuel Selch,
hier teile ich meine Projekte, Erfahrungen, die mich als Entwickler und kreative Person antreiben. 

Ich habe umfangreiche Erfahrungen in der Softwareentwicklung, sowohl im Backend als auch im Frontend.
Neben meiner Arbeit als Entwickler interessiere ich mich für effiziente Projektorganisation, Automatisierung und alles, was die Etnwicklerproduktivität steigern kann. 
`
  
@Controller('home')
export class HomeController {   
    @Get("/skills")
    async getSkills(): Promise<SkillDto[]> {
        return skills;
    }

    @Get("/about")
    async getAbout(): Promise<string> {
        return about;
    }
}
