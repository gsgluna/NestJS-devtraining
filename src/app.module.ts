import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [customersModule, TypeOrmModule.forRoot({

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}