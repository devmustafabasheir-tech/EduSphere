import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student {

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    secondName: string;

    @Prop({ required: true })
    thirdName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    studentId: string;

    // Emails Object
    @Prop({
        type: {
            studentEmail: { type: String },
            personalEmail: { type: String, required: true },
        },
    })
    email: {
        studentEmail: string;
        personalEmail?: string;
    };

    @Prop()
    phoneNumber: string;

    @Prop({ type: Date })
    DOB: Date;

    @Prop()
    Nationality: string;

    @Prop()
    idType: string;

    @Prop()
    idNumber: string;

    // Address Object
    @Prop({
        type: {
            country: String,
            state: String,
            city: String,
            postcode: String,
            street: String,
            houseNo: String,
        },
    })
    address: {
        country: string;
        state: string;
        city: string;
        postcode: string;
        street: string;
        houseNo: string;
    };

    // Parent Info
    @Prop({
        type: {
            name: String,
            relationship: String,
            phone: String,
            email: String,
        },
    })
    parent: {
        name: string;
        relationship: string;
        phone: string;
        email: string;
    };

    @Prop({
        type: {
            bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
            allergies: { type: [String], default: [] },
            chronicDiseases: { type: [String], default: [] },
            medications: { type: [String], default: [] },
            specialNeeds: { type: String },
        },
    })
    medicalInfo: {
        bloodType?: string;
        allergies: string[];
        chronicDiseases: string[];
        medications: string[];
        specialNeeds?: string;
    };

    @Prop({ enum: ['male', 'female'], required: true })
    gender: string;

    @Prop({ default: 'active', enum: ['active', 'graduated', 'suspended', 'withdrawn'] })
    status: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    updatedBy: Types.ObjectId;

    @Prop({ type: [Types.ObjectId], ref: 'Enrollment' })
    enrollments: Types.ObjectId[];

    @Prop({ type: Types.ObjectId, ref: 'School' })
    school: Types.ObjectId;

}

export const StudentSchema = SchemaFactory.createForClass(Student);