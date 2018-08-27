

import { IBaseEntity } from "./base_entity";
import { IReview } from "./review";
import { IUser } from "./user";

export interface IMovie extends IBaseEntity {
    title: string;
    description: string;
    rating: number;
    reviews: IReview[];
    year: number;
    genre: string;
    users: IUser[];

}