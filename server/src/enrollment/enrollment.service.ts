import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Enrollment } from "./enrollment.schema";
import { CreateEnrollmentDto } from "./dto/create-enrollment.dto";

@Injectable()
export class EnrollmentService {
    constructor(@InjectModel(Enrollment.name) private enrollmentModel: Model<Enrollment>) { };

    async create(createEnrollmentDto: CreateEnrollmentDto) {
        const enrollment = await this.enrollmentModel.create(createEnrollmentDto)
        return enrollment;
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