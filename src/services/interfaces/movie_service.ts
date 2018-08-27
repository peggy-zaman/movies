import { IMovie } from "../../entities/interfaces/movie";
import { MovieRepository } from "../../repositories/movie_repository";

export interface IMovieService{
    movieRepository:MovieRepository;
    getMovies():Promise<IMovie[]>;
    addMovies(movie:IMovie):Promise<IMovie>;
    deleteMovie(movie: IMovie);
}