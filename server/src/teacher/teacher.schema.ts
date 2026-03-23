// teacher.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Subject } from '../subject/subject.schema';

export type TeacherDocument = Teacher & Document;

@Schema({ timestamps: true })
export class Teacher {

  // ========= Basic Info =========

  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ trim: true })
  fullName?: string;

  @Prop({ unique: true, sparse: true })
  employeeId?: string;

  @Prop({ unique: true, sparse: true })
  nationalId?: string; // رقم الهوية

  // ========= Contact =========

  @Prop({ trim: true })
  email?: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({ trim: true })
  address?: string;

  // ========= Emergency Contact =========

  @Prop({
    type: {
      name: String,
      relationship: String,
      phone: String,
      address: String,
    },
  })
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    address?: string;
  };

  // ========= Employment =========

  @Prop({ default: Date.now })
  hireDate: Date;

  @Prop({
    enum: ['full_time', 'part_time', 'contract'],
    default: 'full_time',
  })
  employmentType: string;

  @Prop({
    enum: ['active', 'on_leave', 'resigned', 'terminated'],
    default: 'active',
  })
  status: string;

  @Prop({ min: 0 })
  experienceYears?: number;

  // ========= Qualifications =========

  @Prop({
    type: [
      {
        degree: String, // BSc, MSc, PhD...
        field: String,  // Mathematics, Physics...
        institution: String,
        year: Number,
      },
    ],
    default: [],
  })
  qualifications: {
    degree: string;
    field: string;
    institution: string;
    year: number;
  }[];

  // ========= Subjects =========

  @Prop({
    type: [{ type: Types.ObjectId, ref: Subject.name }],
    default: [],
  })
  subjects: Types.ObjectId[];

  // ========= Department =========

  @Prop({ trim: true })
  department?: string; // Mathematics Dept

  // ========= Branch / School =========

  @Prop({ type: Types.ObjectId, ref: 'Branch' })
  branch?: Types.ObjectId;

  // ========= Teaching Schedule =========
  // الجدول الرسمي (حصص ثابتة)

  @Prop({
    type: [
      {
        day: {
          type: String,
          enum: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        },
        startTime: String, // "08:00"
        endTime: String,   // "09:30"
        subject: { type: Types.ObjectId, ref: Subject.name },
        classroom: String,
      },
    ],
    default: [],
  })
  teachingSchedule: any[];

  // ========= Availability Calendar =========
  // متى المدرس متاح للتدريس أو المهام

  @Prop({
    type: [
      {
        day: {
          type: String,
          enum: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        },
        startTime: String,
        endTime: String,
      },
    ],
    default: [],
  })
  availability: any[];

  // ========= Payroll Integration =========

  @Prop({ min: 0 })
  baseSalary?: number;

  @Prop({ min: 0 })
  hourlyRate?: number;

  @Prop({
    type: {
      bankName: String,
      accountNumber: String,
      iban: String,
    },
  })
  payrollInfo?: {
    bankName?: string;
    accountNumber?: string;
    iban?: string;
  };

  // ========= System =========

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userAccount?: Types.ObjectId;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;

}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
