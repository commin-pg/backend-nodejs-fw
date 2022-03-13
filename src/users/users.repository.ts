import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JoinUserRequestDto } from './dto/request/join-user-request.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createBoard(jurd: JoinUserRequestDto): Promise<User> {
    const user = this.create(jurd);
    this.save(user);
    return user;
  }
}
