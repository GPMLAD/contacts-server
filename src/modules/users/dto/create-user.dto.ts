import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "User name",
    default: "Caio Rolando da Rocha",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    description: "User e-mail",
    default: "user@mail.com",
    type: String
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Phone number",
    default: "+5541123456789",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: "Password",
    default: "12345678",
    type: String,
    
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value}: {value: string}) => hashSync(value, 10), {groups: ["transform"]})
  password: string;
}
