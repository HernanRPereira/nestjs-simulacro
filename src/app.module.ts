import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [BooksModule, AuthorsModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
