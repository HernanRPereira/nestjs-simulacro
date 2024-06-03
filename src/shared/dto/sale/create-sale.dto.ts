import { IsInt, IsString, IsDateString } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  readonly bookId: number;

  @IsString()
  readonly customer: string;

  @IsDateString()
  readonly saleDate: string;
}
