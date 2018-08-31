import { IBaseEntity } from "./base_entity";
import { IMovie } from "./movie";
import { OneToMany } from "typeorm";

export interface IGenre extends IBaseEntity{
    name:string;
    movies:IMovie[];
}