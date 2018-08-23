

import { IBaseEntity } from "./base_entity";
import { IReview } from "./review";

export interface IMovie extends IBaseEntity {
    title: string;
    description: string;
    rating: number;
    reviews: IReview[];
    year: number;
    Genre: string;
}