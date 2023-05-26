import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  full_name: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nickname?: string

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone?: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  country?: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  user_id?: string
}