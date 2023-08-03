import { IsEmail, IsOptional, IsString } from 'class-validator';
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
  @IsString()
  number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  img_perfil: string | null;
}
