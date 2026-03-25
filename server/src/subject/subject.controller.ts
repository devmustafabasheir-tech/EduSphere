import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { CreateSubjectDto } from "./dto/create-subject.dto";

@Controller()

export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { };
    @Post()
    create(
        @Body(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }))
         createSubjectDto: CreateSubjectDto
    ) {
        return this.subjectService.create(createSubjectDto);
    }

    @Get()
    logSubjects() {
        return this.subjectService.findAll();
    }
}