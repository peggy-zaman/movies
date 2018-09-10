

import { IBaseEntity } from "./base_entity";
import { IReview } from "./review";
import { IUser } from "./user";
import { Genre } from "../schema/genre";
import { IGenre } from "./genre";
import { ICrew } from "./crew";

export interface IMovie extends IBaseEntity {
    title: string;
    description: string;
    rating: number;
    reviews: IReview[];
    year: number;
    genre: IGenre;
    users: IUser[];
    likeCounter?: number;
    country: string;
    release_date: Date;
    language: string;
    // actors: ICrew[];
    // recommendedMovies: IMovie[];
}