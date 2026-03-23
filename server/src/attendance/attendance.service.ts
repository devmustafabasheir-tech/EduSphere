import { Injectable } from "@nestjs/common";
import { Attendance } from "./attendance.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()

export class AttendanceService{
    constructor(@InjectModel(Attendance.name) private attendanceModule: Model<Attendance>) { };
    
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