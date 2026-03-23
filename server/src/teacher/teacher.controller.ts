import { Controller, Get } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller()

export class TeacherController {
    constructor(private teacherService: TeacherService) { };

    @Get()
    logTeacher() {
        return this.teacherService.findAll();
    }
}