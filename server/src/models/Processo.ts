import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Processo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service: string;

    @Column()
    description: string;

    @Column()
    price: number;

}