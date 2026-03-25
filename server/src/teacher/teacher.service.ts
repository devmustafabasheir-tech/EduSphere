import { Body, Injectable, ValidationPipe } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "./teacher.schema";
import { CreateTeacherDto } from "./dto/create-teacher.dto";

@Injectable()
export class TeacherService {
    constructor(@InjectModel(Teacher.name) private teacherModel: Model<Teacher>) { };

    async create(createTeacherDto: CreateTeacherDto) {
        const teacher = await this.teacherModel.create(createTeacherDto)
        return teacher;
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