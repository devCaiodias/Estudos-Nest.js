import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Length(6)
  @IsString()
  @IsNotEmpty()
  body: string;
}