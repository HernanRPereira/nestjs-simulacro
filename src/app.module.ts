import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestDbService } from './test-db/test-db.service';
import { BooksModule, AuthorsModule, SalesModule } from './modules/index'
import { Author, Book, Sale } from './shared/entities/index';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest_user',
      password: 'nest_password',
      database: 'nest_db',
      entities: [ Author, Book, Sale ],
      synchronize: true, // Cambia a false en producción
    }),
    BooksModule,
    AuthorsModule,
    SalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
