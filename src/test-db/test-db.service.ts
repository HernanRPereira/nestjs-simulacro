import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TestDbService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('Connection to the database has been established successfully.');
    } else {
      try {
        await this.dataSource.initialize();
        console.log('Connection to the database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
  }
}
