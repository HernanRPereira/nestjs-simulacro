import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SaleService } from './sales.service';
import { CreateSaleDto, UpdateSaleDto } from 'src/shared/dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.saleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.saleService.remove(id);
  }
}
