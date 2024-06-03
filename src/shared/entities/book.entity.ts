import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Author, author => author.books)
  @JoinTable()
  authors: Author[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
