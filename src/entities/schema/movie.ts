import { Column, OneToMany, Entity } from "typeorm";
import { IReview } from "../interfaces/review";
import { Review } from "./review";
import { IMovie } from "../interfaces/movie";
import { BaseEntity } from "./base_entity";

@Entity()
export class Movie extends BaseEntity implements IMovie{
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
    @Column()
    public Genre: string;
}