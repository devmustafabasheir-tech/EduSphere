import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ClassDocument = HydratedDocument<Class>;

@Schema({ timestamps: true })
export class Class {

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

    @Prop({ type: [Types.ObjectId], ref: 'Session', required: true })
    sessions: Types.ObjectId[];

    @Prop({ type: Types.ObjectId, ref: 'School', required: true })
    school: Types.ObjectId;

}

export const ClassSchema = SchemaFactory.createForClass(Class);