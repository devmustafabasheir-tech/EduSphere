import { Module } from "@nestjs/common";
import { EnrollmentController } from "./enrollment.controller";
import { EnrollmentService } from "./enrollment.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Enrollment, EnrollmentSchema } from "./enrollment.schema";

@Module({
    imports:[MongooseModule.forFeature([{name: Enrollment.name, schema: EnrollmentSchema}])],
    controllers: [EnrollmentController],
    providers: [EnrollmentService]
})

export class EnrollmentModule { };