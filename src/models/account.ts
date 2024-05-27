import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryColumn()
    account_number: string;

    @Column({ default: 0 })
    balance?: number;
}