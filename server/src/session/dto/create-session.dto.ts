import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsMongoId,
  IsArray,
  IsDateString,
} from 'class-validator';

export class CreateSessionDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  entryID: string;

  @IsOptional()
  @IsEnum(['active', 'inactive'])
  status?: string;

  @IsOptional()
  @IsMongoId()
  createdBy?: string;

  @IsOptional()
  @IsMongoId()
  updatedBy?: string;

  @IsMongoId()
  teacher: string;

  @IsMongoId()
  subject: string;

  @IsMongoId()
  school: string;

  @IsOptional()
  @IsArray()
  @IsDateString({}, { each: true })
  dateTime?: string[];
}