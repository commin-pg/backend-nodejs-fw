import {
    IsEmail, IsString,
    MaxLength,
    MinLength
} from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Column()
  userId: string;

  @IsString()
  @Column()
  userPw: string;

  @IsEmail()
  @Column()
  userEmail: string;
}
