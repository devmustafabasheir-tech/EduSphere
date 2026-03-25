import {
  IsMongoId,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CreateAttendanceDto {

  @IsMongoId()
  @IsNotEmpty()
  student: string;

  @IsMongoId()
  @IsNotEmpty()
  session: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsEnum(['present', 'absent', 'late'])
  status?: 'present' | 'absent' | 'late';

  @IsOptional()
  @IsMongoId()
  createdBy?: string;

  @IsOptional()
  @IsMongoId()
  updatedBy?: string;

  @IsMongoId()
  school: string;

  @IsMongoId()
  person: string;
}