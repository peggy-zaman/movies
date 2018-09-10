import { ICrew } from "../interfaces/crew";
import { IMovie } from "../interfaces/movie";
import { Column, ManyToMany, Entity, BaseEntity, JoinTable } from "typeorm";
import { Movie } from "./movie";
@Entity()
export class Crew extends BaseEntity implements ICrew {

    @Column()
    firstname: string;
    @Column()
    lastname: string;

    @Column()
    birthdate: Date;
    // @ManyToMany(type => Movie, movie => movie.actors)
    // @JoinTable()
    // movies: IMovie[];
}