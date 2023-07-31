import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string | null;

  @ApiProperty()
  @IsString()
  @IsOptional()
  infos: string | null;

  @ApiProperty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  img_perfil: string | null;
}
