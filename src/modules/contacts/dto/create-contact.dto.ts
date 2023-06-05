import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateContactDto {
  @ApiProperty({
    description: "Contact name",
    default: "Omar Telo",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  full_name: string


  @ApiProperty({
    description: "Contact nickname",
    default: "D4rk67",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nickname: string | null

  @ApiProperty({
    description: "Contact email",
    default: "contact@mail.com",
    type: String
  })
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string | null

  @ApiProperty({
    description: "Contact phone",
    default: "11912345678",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone: string | null


  @ApiProperty({
    description: "Contact country",
    default: "Brazil",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  country: string | null 
}