import { IBaseEntity } from "./base_entity";
import { IMovie } from "./movie";
import { IPerson } from "./person";

export interface IUser extends IBaseEntity, IPerson {

    favoriteMovies: IMovie[];
    watchLaterMovies: IMovie[];
}