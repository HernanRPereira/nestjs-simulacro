import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto, UpdateBookDto } from 'src/shared/dto';
import { Author, Book } from 'src/shared/entities';
import { Like, Repository } from 'typeorm';


@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { title, description, authorIds } = createBookDto;
    const authors = await this.authorRepository.findByIds(authorIds);
    const book = this.bookRepository.create({ title, description, authors });
    return this.bookRepository.save(book);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['authors'], skip, take });
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id }, relations: ['authors'] });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const { title, description, authorIds } = updateBookDto;
    const book = await this.bookRepository.findOne({ where: { id }, relations: ['authors'] });

    if (title) book.title = title;
    if (description) book.description = description;
    if (authorIds) {
      const authors = await this.authorRepository.findByIds(authorIds);
      book.authors = authors;
    }

    await this.bookRepository.save(book);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.softDelete(id);
  }

  async deleteOne(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  async findByAuthor(authorId: number): Promise<Book[]> {
    return this.bookRepository.find({ where: { authors: { id: authorId } }, relations: ['authors'] });
  }

  async findByTitle(title: string): Promise<Book[]> {
    return this.bookRepository.find({ where: { title: Like(`%${title}%`) }, relations: ['authors'] });
  }
}
