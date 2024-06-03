import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestDbService } from './test-db/test-db.service';
import { BooksModule, AuthorsModule, SalesModule } from './modules/index'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest_user',
      password: 'nest_password',
      database: 'nest_db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Cambia a false en producción
    }),
    BooksModule,
    AuthorsModule,
    SalesModule,
  ],
  controllers: [],
  providers: [TestDbService],
})
export class AppModule {}
