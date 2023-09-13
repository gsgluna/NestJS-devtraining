import { IsNumber, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()    
    readonly username: string;

    @IsString()
    readonly address: string;

    @IsString()
    readonly sex: string;

    @IsNumber()
    readonly userage: number;

    @IsString()
    readonly city: string;

    @IsString()
    readonly country: string
}
