import { IsAlpha, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty({message: 'Not null email'})
  email: string;
  
  @Length(3)
  @IsString()
  name: string;
  
  @Length(6)
  @IsAlpha()
  @IsNotEmpty({message: 'Not null password'})
  password: string;
}