import { IGenre } from "../interfaces/genre";
import { BaseEntity } from "./base_entity";
import { OneToMany, Entity, Column } from "typeorm";
import { Movie } from "./movie";
import { IMovie } from "../interfaces/movie";

@Entity()
export class Genre extends BaseEntity implements IGenre {
    @Column()
    name: string;
    @OneToMany(type => Movie, movie => movie.genre)
    public movies: IMovie[];
}