import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: CreateBookDto) {
    return await this.bookService.create(book);
  }

  @Get()
  async findAll() {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bookService.findOne(Number(id));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.bookService.delete(Number(id));
  }
}
