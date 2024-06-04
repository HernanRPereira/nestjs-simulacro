import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSaleDto, UpdateSaleDto } from 'src/shared/dto';
import { Book, Sale } from 'src/shared/entities';
import { Repository } from 'typeorm';


@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const { bookId, customer, saleDate } = createSaleDto;
    const book = await this.bookRepository.findOne({ where: { id: bookId } });
    const sale = this.saleRepository.create({ book, customer, saleDate });
    return this.saleRepository.save(sale);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Sale[]> {
    return this.saleRepository.find({ relations: ['book'], skip, take });
  }

  findOne(id: number): Promise<Sale> {
    return this.saleRepository.findOne({ where: { id }, relations: ['book'] });
  }

  async update(id: number, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    const { bookId, customer, saleDate } = updateSaleDto;
    const sale = await this.saleRepository.findOne({ where: { id }, relations: ['book'] });

    if (bookId) {
      const book = await this.bookRepository.findOne({ where: { id: bookId } });
      sale.book = book;
    }
    if (customer) sale.customer = customer;
    if (saleDate) sale.saleDate = saleDate;

    await this.saleRepository.save(sale);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.saleRepository.softDelete(id);
  }
}