import { ICrew } from "../interfaces/crew";
import { IMovie } from "../interfaces/movie";
import { Column, ManyToMany, Entity, BaseEntity, JoinTable } from "typeorm";
import { Movie } from "./movie";
import { Person } from "./person";
@Entity()
export class Crew extends Person implements ICrew {

    @ManyToMany(type => Movie, movie => movie.actors)
    movies: IMovie[];
}