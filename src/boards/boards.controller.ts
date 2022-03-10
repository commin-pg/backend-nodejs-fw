import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.create(createBoardDto);
  }

  @Get()
  findAll(): Promise<Board[]> {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Board> {
    return this.boardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<Board> {
    console.log(title,description)
    return this.boardsService.update(id, title,description);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.boardsService.remove(id);
  }
}
