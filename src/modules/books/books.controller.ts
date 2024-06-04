import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './books.service';
import { CreateBookDto, UpdateBookDto } from 'src/shared/dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {

  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiBody({ type: CreateBookDto }) 
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: number) {
    return this.bookService.deleteOne(id);
  }
}
