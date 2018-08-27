import { BaseEntity } from "./base_entity";
import { IUser } from "../interfaces/user";
import { Movie } from "./movie";
import { ManyToMany, JoinTable, Entity } from "typeorm";
import { IMovie } from "../interfaces/movie";

@Entity()
export class User extends BaseEntity implements IUser{
    @ManyToMany(type => Movie)
    @JoinTable()
    movies: IMovie[]
}