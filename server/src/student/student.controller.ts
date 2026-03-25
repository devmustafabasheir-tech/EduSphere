import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/create-student.dto";

@Controller('student')

export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()

    create(
        @Body(new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true,
            }))
        createStudentDto: CreateStudentDto
    ) {
        return this.studentService.create(createStudentDto);
    }


    @Get()
    logStudent() {
        return this.studentService.findAll();
    }
}