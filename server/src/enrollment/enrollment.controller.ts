import { Controller, Get } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";

@Controller()
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService) { };

    @Get()
    logTeacher() {
        return this.enrollmentService.findAll();
    }
}