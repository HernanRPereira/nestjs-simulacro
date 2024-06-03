import { IsString } from 'class-validator';

export class UpdateAuthorDto {
  @IsString()
  readonly name: string;
}
