import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string | null;

  @IsString()
  @IsOptional()
  infos: string | null;

  @IsNumber()
  number: number;

  @IsString()
  @IsOptional()
  img_perfil: string | null;

  @IsString()
  userId: string;
}
