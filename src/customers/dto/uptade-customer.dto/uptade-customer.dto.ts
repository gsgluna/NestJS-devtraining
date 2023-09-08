import { PartialType } from "@nestjs/mapped-types";
import { CreateCustomerDto } from "../create-customer.dto/create-customer.dto";

export class UptadeCustomerDto extends PartialType(CreateCustomerDto) {
    
}
