import { IMovie } from "../../entities/interfaces/movie";
import { MovieRepository } from "../../repositories/movie_repository";
import { IUser } from "../../entities/interfaces/user";

export interface IMovieService {
    movieRepository: MovieRepository;
    getMovies(): Promise<IMovie[]>;
    getUpcomingMovies(country: string, language: string): Promise<IMovie[]>;
    getActionMovies(): Promise<IMovie[]>;
    addMovies(movie: IMovie): Promise<IMovie>;
    deleteMovie(movie: IMovie);
    likeMovie(movie: IMovie);
    dislikeMovie(movie: IMovie);
    getUsersWhoFavoritedMovie(movieId: number): Promise<IUser[]>;
}