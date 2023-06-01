import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  full_name: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nickname: string | null

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string | null

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone: string | null

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  country: string | null

  
}