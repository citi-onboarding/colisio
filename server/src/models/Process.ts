import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Process {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service: string;

    @Column()
    description: string;

}