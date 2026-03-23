import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CEnrollmentDocument = HydratedDocument<Enrollment>;

@Schema({ timestamps: true })
export class Enrollment {

    @Prop({ required: true })
    name: string;

    @Prop({ default: 'active', enum: ['active', 'inactive'] })
    status: string;

    @Prop({ required: true, unique: true })
    entryID: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    updatedBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Class', required: true })
    class: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'School', required: true })
    school: Types.ObjectId;

}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);