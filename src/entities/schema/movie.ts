import { Column, OneToMany, Entity, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { IReview } from "../interfaces/review";
import { Review } from "./review";
import { IMovie } from "../interfaces/movie";
import { BaseEntity } from "./base_entity";
import { User } from "./user";
import { IUser } from "../interfaces/user";
import { Genre } from "./genre";
import { ICrew } from "../interfaces/crew";
import { Crew } from "./crew";

@Entity()
export class Movie extends BaseEntity implements IMovie {


    @Column({ nullable: true })
    country: string;
    @Column({ nullable: true })
    release_date: Date;
    @Column({ nullable: true })
    language: string;
    @Column({ nullable: true, default: 0 })
    public likeCounter?: number;
    @Column()
    public title: string;
    @Column()
    public description: string;
    @Column()
    public rating: number;
    @OneToMany(type => Review, review => review.movie)
    public reviews: IReview[];
    @Column()
    public year: number;
    @ManyToOne(type => Genre, genre => genre.movies, { nullable: true })
    public genre: Genre;
    @ManyToMany(type => User, user => user.favoriteMovies)
    public users: IUser[];

    @ManyToMany(type => Crew, crew => crew.movies)
    @JoinTable()
    public actors: ICrew[];

    // recommendedMovies: IMovie[];



}