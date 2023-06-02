import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Process {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

}
