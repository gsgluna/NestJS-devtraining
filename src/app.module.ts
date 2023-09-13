import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [customersModule, TypeOrmModule.forRoot({

    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    autoLoadEntities: true,
    synchronize: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
