import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto, UpdateAuthorDto } from 'src/shared/dto';
import { Author } from 'src/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Author[]> {
    return this.authorRepository.find({ relations: ['books'], skip, take });
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({ where: { id }, relations: ['books'] });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.softDelete(id);
  }
}
