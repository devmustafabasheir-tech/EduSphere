import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Student } from "./student.schema";
import { CreateStudentDto } from "./dto/create-student.dto";

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<Student>) { };

    async create(createStudentDto: CreateStudentDto) {
        const student = await  this.studentModel.create(createStudentDto)
        return student;
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