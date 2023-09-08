import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';
import { UptadeCustomerDto } from './dto/uptade-customer.dto/uptade-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ){}

    findAll(){
        return this.customerRepository.find();        
    }

    findOne(id: string){
        const customer =  this.customerRepository.findOne(id);

        if (!customer) {

          throw new NotFoundException(`customer ID ${id} not found`)


        }
    }

    create(createCustomerDto: CreateCustomerDto){
        const customer = this.customerRepository.create(createCustomerDto);
        return this.customerRepository.save(customer)
    }

    async update(id: string, updateCustomerDto: UptadeCustomerDto) {
        const customer = await this.customerRepository.preload({
          id: +id,
          ... updateCustomerDto,
        });

        if (!customer){
          throw new NotFoundException(`customer ID ${id} not found`)
        }

        return this.customerRepository.save(customer)
      }
    
      async remove(id: string) {
        const customer = await this.customerRepository.findOne(id);

        if (!customer){
          throw new NotFoundException(`customer ID ${id} not found`)
        }

        return this.customerRepository.remove(customer)

      }



}
