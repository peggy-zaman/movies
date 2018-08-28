import { IBaseEntity } from "./base_entity";
import { IMovie } from "./movie";

export interface IUser extends IBaseEntity {

    favoriteMovies: IMovie[];
    watchLaterMovies: IMovie[];
}