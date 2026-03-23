import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SessionDocument = HydratedDocument<Session>;

@Schema({ timestamps: true })
export class Session {

    @Prop({ required: true })
    name: string;

   @Prop({ required: true, unique: true })
entryID: string;

    @Prop({ default: 'active', enum: ['active', 'inactive'] })
    status: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    updatedBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Teacher', required: true })
    teacher: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Subject', required: true })
    subject: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'School', required: true })
    school: Types.ObjectId;

    @Prop({ type: [Date], default: [] })
    dateTime: Date[];

}

export const SessionSchema = SchemaFactory.createForClass(Session);