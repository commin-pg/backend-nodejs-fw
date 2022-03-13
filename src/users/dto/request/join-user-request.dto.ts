import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class JoinUserRequestDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    @ApiProperty({ description: 'user id', example:'khm0813' })
    userId: string;
  
    @ApiProperty({ description: 'user password', example:'khm0813' })
    @IsNotEmpty()
    userPw: string;
  
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'user email', example:'khm0813@gmail.com' })
    userEmail: string;
  }
  