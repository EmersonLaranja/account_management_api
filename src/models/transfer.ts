import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column()
    amount: number;
}
