import { IPerson } from "../interfaces/person";
import { BaseEntity } from "./base_entity";

export class Person extends BaseEntity implements IPerson {
    public firstname: string;
    public lastname: string;
    public birthdate: Date;
}