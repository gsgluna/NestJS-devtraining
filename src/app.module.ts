import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [customersModule, TypeOrmModule.forRoot({

    type: 'postgres',
    host: 'zuyubase.cuuyb9musp1v.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'shar3z123',
    database: 'zuyudatabase',
    autoLoadEntities: true,
    synchronize: false,
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
