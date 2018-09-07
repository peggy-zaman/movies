import { IBaseEntity } from "./base_entity";

export interface IPerson extends IBaseEntity{
    firstname:string;
    lastname:string;
    birthdate:Date;
}