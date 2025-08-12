import { IsAlpha, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty({message: 'Not null'})
  email: string;
  
  @IsString()
  name: string;
  
  @IsAlpha()
  @IsNotEmpty({message: 'Not null'})
  password: string;
}