import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";
import { CreateEnrollmentDto } from "./dto/create-enrollment.dto";

@Controller()
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) { };

    @Post()
    create(
        @Body(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }))
        createEnrollmentDto: CreateEnrollmentDto
    ) {
        return this.enrollmentService.create(createEnrollmentDto);
    };

    @Get()
    logTeacher() {
        return this.enrollmentService.findAll();
    }
}