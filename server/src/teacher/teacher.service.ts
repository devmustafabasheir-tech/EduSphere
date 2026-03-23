import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "./teacher.schema";

@Injectable()
export class TeacherService {
    constructor(@InjectModel(Teacher.name) private teacherModule: Model<Teacher>) { };

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