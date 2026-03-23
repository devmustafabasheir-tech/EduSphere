import { Module } from "@nestjs/common";
import { SubjectController } from "./subject.controller";
import { SubjectService } from "./subject.service";
import { Subject, SubjectSchema } from "./subject.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{name: Subject.name, schema: SubjectSchema}])],
    controllers: [SubjectController],
    providers: [SubjectService],
})

export class SubjectModule {}