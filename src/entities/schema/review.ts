import {
    Entity,
    Column,
    ManyToOne
} from "typeorm";
import { BaseEntity } from "./base_entity";
import { IReview } from "../interfaces/review";
import { IMovie } from "../interfaces/movie";
import { Movie } from "./movie";

@Entity()
export class Review extends BaseEntity implements IReview {

    @Column()
    // @mustBe(a.string().required())
    public title: string;

    @Column()
    description!: string;

    @Column()
    rating!: number;

    @ManyToOne(type => Movie, movie => movie.reviews)
    movie: IMovie;


}
