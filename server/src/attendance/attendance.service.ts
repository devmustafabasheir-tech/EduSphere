import { Injectable } from "@nestjs/common";
import { Attendance } from "./attendance.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAttendanceDto } from "./dto/create-attendance.dto";

@Injectable()

export class AttendanceService {
    constructor(@InjectModel(Attendance.name) private attendanceModel: Model<Attendance>) { };

    async create(createAttendanceDto: CreateAttendanceDto) {
        const attendance = await this.attendanceModel.create(createAttendanceDto)
        return attendance;
    }

    findAll(): string {
        return "All";
    }

    findById(id: string): string {
        return `find ${id}`;
    }

    softDelete(id: string): String {
        return `soft Delete ${id}`;
    }

    hardDelete(id: string): String {
        return `hard delete ${id}`;
    }

    search(): String {
        return "fond many"
    }

    update(id: string): String {
        return `updated ${id}`
    }
}