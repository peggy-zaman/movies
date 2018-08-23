import { IBaseEntity } from "./base_entity";
import { IMovie } from "./movie";

export interface IReview extends IBaseEntity {
    title: string;
    description: string;
    movie: IMovie;

}
