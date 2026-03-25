import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  Min,
  IsArray,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

// ===== Nested DTOs =====

export class EmergencyContactDto {
  @IsString() name: string;
  @IsString() relationship: string;
  @IsString() phone: string;
  @IsOptional() @IsString() address?: string;
}

export class QualificationDto {
  @IsString() degree: string;
  @IsString() field: string;
  @IsString() institution: string;

  @IsNumber()
  year: number;
}

export class TeachingScheduleDto {
  @IsEnum(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
  day: string;

  @IsString() startTime: string;
  @IsString() endTime: string;

  @IsOptional() @IsString()
  subject?: string;

  @IsOptional() @IsString()
  classroom?: string;
}

export class AvailabilityDto {
  @IsEnum(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
  day: string;

  @IsString() startTime: string;
  @IsString() endTime: string;
}

export class PayrollInfoDto {
  @IsOptional() @IsString()
  bankName?: string;

  @IsOptional() @IsString()
  accountNumber?: string;

  @IsOptional() @IsString()
  iban?: string;
}

// ===== Main DTO =====

export class CreateTeacherDto {

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional() @IsString()
  fullName?: string;

  @IsOptional() @IsString()
  employeeId?: string;

  @IsOptional() @IsString()
  nationalId?: string;

  @IsOptional() @IsString()
  email?: string;

  @IsOptional() @IsString()
  phone?: string;

  @IsOptional() @IsString()
  address?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact?: EmergencyContactDto;

  @IsOptional()
  @IsDateString()
  hireDate?: string;

  @IsOptional()
  @IsEnum(['full_time', 'part_time', 'contract'])
  employmentType?: string;

  @IsOptional()
  @IsEnum(['active', 'on_leave', 'resigned', 'terminated'])
  status?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  experienceYears?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QualificationDto)
  qualifications?: QualificationDto[];

  @IsOptional()
  @IsArray()
  subjects?: string[];

  @IsOptional() @IsString()
  department?: string;

  @IsOptional() @IsString()
  branch?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TeachingScheduleDto)
  teachingSchedule?: TeachingScheduleDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AvailabilityDto)
  availability?: AvailabilityDto[];

  @IsOptional()
  @IsNumber() @Min(0)
  baseSalary?: number;

  @IsOptional()
  @IsNumber() @Min(0)
  hourlyRate?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => PayrollInfoDto)
  payrollInfo?: PayrollInfoDto;

  @IsOptional()
  @IsString()
  userAccount?: string;

}