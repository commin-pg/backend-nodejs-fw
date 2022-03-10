import { EntityRepository, Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.create(createBoardDto);
    this.save(board);
    return board;
  }
}
