import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { CreateTeacherDto } from "./dto/create-teacher.dto";

@Controller("teacher")

export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { };

    @Post()
    create(
        @Body(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true,
            }),
        )
        createTeacherDto: CreateTeacherDto
    ) {
        return this.teacherService.create(createTeacherDto)
    }

    @Get()
    logTeacher() {
        return this.teacherService.findAll();
    }
}