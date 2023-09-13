import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    address: string;

    @Column()
    sex: string;

    @Column()
    userage: number;

    @Column()
    city: string;

    @Column()
    country: string
}
