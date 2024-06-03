import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  readonly name: string;
}
