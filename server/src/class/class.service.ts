import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Class } from "./class.schema";
import { Model } from "mongoose";

@Injectable()
export class ClassService {
    constructor(@InjectModel(Class.name) private classModule: Model<Class>) { };

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