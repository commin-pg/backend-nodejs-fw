import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { JoinUserRequestDto } from './dto/request/join-user-request.dto';


@ApiTags('유저 API')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  

  @Post('/join')
  create(@Body() jurd: JoinUserRequestDto): Promise<User> {
    return this.usersService.create(jurd);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('userEmail') userEmail: string,
  ): Promise<User> {
    return this.usersService.update(id, userEmail);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
