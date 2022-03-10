import { IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Column()
  title: string;

  @Column()
  description: string;
}
