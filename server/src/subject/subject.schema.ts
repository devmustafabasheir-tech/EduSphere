// subject.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema({ timestamps: true })
export class Subject {

  @Prop({ required: true, trim: true })
  name: string; // Mathematics, Physics...

  @Prop({ trim: true })
  code?: string; // MATH101

  @Prop({ trim: true })
  description?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean; // Soft delete

}
export const SubjectSchema = SchemaFactory.createForClass(Subject);

