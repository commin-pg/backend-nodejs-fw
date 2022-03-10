import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsRepository)
    private boardRepository: BoardsRepository,
  ) {}

  create(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async findAll(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async findOne(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id);

    if (!board) {
      throw new NotFoundException(`Can't find ${id}`);
    }

    return board;
  }

  async update(id: number, title: string, description: string): Promise<Board> {
    const board = await this.findOne(id);

    board.title = title;
    board.description = description;

    console.log('title:', title);
    console.log('description : ', description);

    await this.boardRepository.save(board);

    return board;
  }

  async remove(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find ${id}`);
    }
  }
}
