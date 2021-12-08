import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";


@Entity()
export  class  Certificates {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    certificates: string;
}