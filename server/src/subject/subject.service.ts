import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Subject } from "./subject.schema";
import { CreateSubjectDto } from "./dto/create-subject.dto";

@Injectable()
export class SubjectService {
    constructor(@InjectModel(Subject.name) private subjectModel: Model<Subject>) { };

    async create(createSubjectDto: CreateSubjectDto) {
        const subject = await this.subjectModel.create(createSubjectDto);
        return subject;
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