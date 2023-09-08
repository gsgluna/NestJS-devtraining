import { IsNumber, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()    
    readonly name: string;

    @IsString()
    readonly address: string;

    @IsString()
    readonly sex: string;

    @IsNumber()
    readonly age: number;

    @IsString()
    readonly city: string;

    @IsString()
    readonly country: string
}
