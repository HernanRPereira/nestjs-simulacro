import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from 'src/shared/dto';
import { AuthorService } from './authors.service';

@Controller('authors')
export class AuthorsController {

  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authorService.remove(id);
  }
}
