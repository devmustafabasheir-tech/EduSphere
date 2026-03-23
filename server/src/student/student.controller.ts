import { Controller, Get } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('student')

export class StudentController {
    constructor(private studentService: StudentService){}

    @Get()
    logStudent() {
       return this.studentService.findAll();
    }
}