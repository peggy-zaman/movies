import { IPerson } from "../interfaces/person";
import { BaseEntity } from "./base_entity";
import { Entity } from "typeorm";

@Entity()
export class Person implements IPerson {
    public firstname: string;
    public lastname: string;
    public birthdate: Date;
}