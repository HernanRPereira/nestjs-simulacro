import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SaleService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book, Sale } from 'src/shared/entities';


@Module({
  imports: [TypeOrmModule.forFeature([Sale, Book])],
  controllers: [SalesController],
  providers: [SaleService],
})
export class SalesModule {}
