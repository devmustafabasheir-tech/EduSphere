import { Controller, Get } from "@nestjs/common";
import { SubjectService } from "./subject.service";

@Controller()

export class SubjectController {
    constructor(private subjectService: SubjectService) { };
    
    @Get()
    logSubjects() {
        return this.subjectService.findAll();
    }
}