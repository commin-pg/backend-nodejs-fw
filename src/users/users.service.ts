import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JoinUserRequestDto } from './dto/request/join-user-request.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
  ) {}

  create(jurd: JoinUserRequestDto): Promise<User> {
    return this.userRepository.createBoard(jurd);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Can't find ${id}`);
    }

    return user;
  }

  async update(id: number, userEmail: string): Promise<User> {
    const user = await this.findOne(id);

    user.userEmail = userEmail;

    console.log('userEmail : ', userEmail);

    await this.userRepository.save(user);

    return user;
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find ${id}`);
    }
  }
}
