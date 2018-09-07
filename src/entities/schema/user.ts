import { BaseEntity } from "./base_entity";
import { IUser } from "../interfaces/user";
import { Movie } from "./movie";
import { ManyToMany, JoinTable, Entity, Column } from "typeorm";
import { IMovie } from "../interfaces/movie";

@Entity()
export class User extends BaseEntity implements IUser {
    @Column({ nullable: true })
    public firstname: string;
    @Column({ nullable: true })
    public lastname: string;
    @Column({ nullable: true })
    public birthdate: Date;
    @ManyToMany(type => Movie, movie => movie.users)
    @JoinTable()
    public favoriteMovies: IMovie[]

    @ManyToMany(type => Movie, movie => movie.users)
    @JoinTable()
    watchLaterMovies: IMovie[]
}