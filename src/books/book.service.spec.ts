import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a book and return it', async () => {
    const book: CreateBookDto = {
      title: 'Test Book',
      author: 'Test Author',
      review: 'Great book!',
      description: 'Test description',
    };

    const result = await service.create(book);
    expect(result).toMatchObject(book);
  });

  it('should return an array of books', async () => {
    const books = await service.findAll();
    expect(Array.isArray(books)).toBe(true);
  });
});
