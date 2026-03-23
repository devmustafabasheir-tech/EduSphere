import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Session } from "./session.schema";

@Injectable()
export class SessionService{
        constructor(@InjectModel(Session.name) private sessionModule: Model<Session>) { };
    
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