import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";


@Entity()
export  class  References {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    references: string;
}