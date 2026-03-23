import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AttendanceDocument = HydratedDocument<Attendance>;

@Schema({ timestamps: true })
export class Attendance {

    @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
    student: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Session', required: true })
    session: Types.ObjectId;

    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({ type: String, enum: ['present', 'absent', 'late'], default: 'present' })
    status: 'present' | 'absent' | 'late';

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    updatedBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'School', required: true })
    school: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Person', required: true })
    person: Types.ObjectId;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);