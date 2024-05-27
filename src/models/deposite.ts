import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Deposit {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;
}