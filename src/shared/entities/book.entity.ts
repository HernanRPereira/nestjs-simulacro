import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Author } from './author.entity';
import { Sale } from './sale.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Author, (author) => author.books)
  authors: Author[];

  @OneToMany(() => Sale, (sale) => sale.book)
  sales: Sale[];
}
