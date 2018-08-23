import { IMovie } from "../../entities/interfaces/movie";

export interface IMovieService{
    getMovies():Promise<IMovie[]>;
}