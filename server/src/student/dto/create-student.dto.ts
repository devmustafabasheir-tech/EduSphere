import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsDateString,
  IsEnum,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// ===== Nested DTOs =====

export class StudentEmailDto {
  @IsOptional()
  @IsEmail()
  studentEmail?: string;

  @IsEmail()
  @IsNotEmpty()
  personalEmail: string;
}

export class AddressDto {
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() state?: string;
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() postcode?: string;
  @IsOptional() @IsString() street?: string;
  @IsOptional() @IsString() houseNo?: string;
}

export class ParentDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() relationship?: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsEmail() email?: string;
}

export class MedicalInfoDto {
  @IsOptional()
  @IsEnum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
  bloodType?: string;

  @IsOptional() @IsArray() @IsString({ each: true })
  allergies?: string[];

  @IsOptional() @IsArray() @IsString({ each: true })
  chronicDiseases?: string[];

  @IsOptional() @IsArray() @IsString({ each: true })
  medications?: string[];

  @IsOptional() @IsString()
  specialNeeds?: string;
}

// ===== Main DTO =====

export class CreateStudentDto {

  @IsString() @IsNotEmpty()
  firstName: string;

  @IsString() @IsNotEmpty()
  secondName: string;

  @IsString() @IsNotEmpty()
  thirdName: string;

  @IsString() @IsNotEmpty()
  lastName: string;

  @IsString() @IsNotEmpty()
  studentId: string;

  @ValidateNested()
  @Type(() => StudentEmailDto)
  email: StudentEmailDto;

  @IsOptional() @IsString()
  phoneNumber?: string;

  @IsOptional() @IsDateString()
  DOB?: string;

  @IsOptional() @IsString()
  Nationality?: string;

  @IsOptional() @IsString()
  idType?: string;

  @IsOptional() @IsString()
  idNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ParentDto)
  parent?: ParentDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MedicalInfoDto)
  medicalInfo?: MedicalInfoDto;

  @IsEnum(['male', 'female'])
  gender: string;

  @IsOptional()
  @IsEnum(['active', 'graduated', 'suspended', 'withdrawn'])
  status?: string;

  @IsOptional() @IsString()
  school?: string;

}