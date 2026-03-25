import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsMongoId,
  IsArray,
} from 'class-validator';

export class CreateClassDto {

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

  @IsArray()
  @IsMongoId({ each: true })
  sessions: string[];

  @IsMongoId()
  school: string;
}