import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBookDto } from './dto/create-book.dto';
import redis from '../redis';

const prisma = new PrismaClient();

@Injectable()
export class BookService {
  async create(book: CreateBookDto) {
    const newBook = await prisma.book.create({ data: book });
    await redis.del('books');
    return newBook;
  }

  async findAll() {
    const cache = await redis.get('books');
    if (cache) {
      return JSON.parse(cache) as CreateBookDto[];
    }

    const books = await prisma.book.findMany();
    console.log('📡 Returning from DB + setting cache');
    await redis.set('books', JSON.stringify(books), 'EX', 60);
    return books;
  }

  async findOne(id: number) {
    const cache = await redis.get(`book:${id}`);
    if (cache) {
      console.log('📦 Returning single book from cache');
      return JSON.parse(cache) as CreateBookDto;
    }

    const book = await prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);

    // ✅ Cache the individual book for 60 seconds
    await redis.set(`book:${id}`, JSON.stringify(book), 'EX', 60);
    return book;
  }

  async delete(id: number) {
    const book = await prisma.book.delete({ where: { id } });

    // ❌ Clear Redis cache
    await redis.del('books'); // list
    await redis.del(`book:${id}`); // individual book
    return book;
  }
}
