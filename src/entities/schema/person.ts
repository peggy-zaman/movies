import { IPerson } from "../interfaces/person";
import { BaseEntity } from "./base_entity";
import { Entity, Column } from "typeorm";

@Entity()
export class Person extends BaseEntity implements IPerson {
    @Column()
    public firstname: string;
    @Column()
    public lastname: string;
    @Column()
    public birthdate: Date;
}