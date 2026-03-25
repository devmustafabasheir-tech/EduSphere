import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateEnrollmentDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEnum(['active', 'inactive'])
  status?: string;

  @IsString()
  @IsNotEmpty()
  entryID: string;

  @IsOptional()
  @IsMongoId()
  createdBy?: string;

  @IsOptional()
  @IsMongoId()
  updatedBy?: string;

  @IsMongoId()
  class: string;

  @IsMongoId()
  school: string;
}