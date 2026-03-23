import { Controller, Get } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";

@Controller()
export class AttendanceController {
    constructor(private attendanceService: AttendanceService) { };

    @Get()
    logAttendance() {
        return this.attendanceService.findAll();
    }
}