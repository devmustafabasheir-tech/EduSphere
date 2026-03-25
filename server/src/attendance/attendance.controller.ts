import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";
import { CreateAttendanceDto } from "./dto/create-attendance.dto";

@Controller()
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) { };

    @Post()
    create(
        @Body(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }))
        createAttendanceDto: CreateAttendanceDto
    ) {
        return this.attendanceService.create(createAttendanceDto);
    }

    @Get()
    logAttendance() {
        return this.attendanceService.findAll();
    }
}