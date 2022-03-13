import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  userPw: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;
}
