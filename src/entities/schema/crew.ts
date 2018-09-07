import { ICrew } from "../interfaces/crew";
import { IMovie } from "../interfaces/movie";
import { Column, ManyToMany } from "typeorm";
import { Movie } from "./movie";

export class Crew implements ICrew {
    @Column()
    id: number;
    @Column()
    firstname: string;
    @Column()
    lastname: string;

    @Column()
    birthdate: Date;
    @ManyToMany(type => Movie, movie => movie.actors)
    movies: IMovie[];
}