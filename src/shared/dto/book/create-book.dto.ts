import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  readonly description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  readonly authorIds: number[];
}
