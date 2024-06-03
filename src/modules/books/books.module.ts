import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BookService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author, Book } from 'src/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule {}
