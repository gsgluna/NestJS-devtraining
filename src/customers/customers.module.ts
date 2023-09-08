import { Module } from '@nestjs/common';
import { customersController } from './customers.controller';
import { CustomerService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [customersController],
  providers: [CustomerService],
})
export class customersModule {}
