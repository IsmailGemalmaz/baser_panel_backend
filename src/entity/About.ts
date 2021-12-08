import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";


@Entity()
export  class  About {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:"text"})
    about: string;

    @Column()
    aboutTitle: string;

  

 

}