import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { CustomerService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';
import { UptadeCustomerDto } from './dto/uptade-customer.dto/uptade-customer.dto';

@Controller('customers')
export class customersController {
  constructor(private readonly customersService: CustomerService){}

 @Get()
    findAll(){
        return this.customersService.findAll();
    } 

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.customersService.findOne(id);
    }

    @Post()
    create(@Body() CreateCustomerDto: CreateCustomerDto){
        return this.customersService.create(CreateCustomerDto);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCustomerDto: UptadeCustomerDto){
        return this.customersService.update(id, updateCustomerDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.customersService.remove(id);
    }

}
