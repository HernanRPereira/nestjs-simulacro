import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book)
  book: Book;

  @Column()
  customer: string;

  @CreateDateColumn()
  saleDate: Date;
}
