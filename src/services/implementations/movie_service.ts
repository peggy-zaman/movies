import { injectable } from "inversify";
import { IMovieService } from "../interfaces/movie_service";
import { IMovie } from "../../entities/interfaces/movie";
import { getCustomRepository } from "typeorm";
import { MovieRepository } from "../../repositories/movie_repository";
import { IUser } from "../../entities/interfaces/user";

@injectable()
export class MovieService implements IMovieService {


    movieRepository = getCustomRepository(MovieRepository);
    getActionMovies(): Promise<IMovie[]> {
        return this.movieRepository.getActionMovies();
    }
    getMoviesForCrew(crewId: number): Promise<IMovie[]> {
        return this.movieRepository.getMoviesForCrew(crewId);
    }
    getUsersWhoFavoritedMovie(movieId: number): Promise<IUser[]> {
        return this.movieRepository.getUsersWhoFavoritedMovie(movieId);
    }

    public async getMovies(): Promise<IMovie[]> {

        return this.movieRepository.getMovies();
    }
    public async addMovies(movie: IMovie): Promise<IMovie> {
        this.movieRepository.addMovies(movie);
        return movie;
    }
    deleteMovie(movie: IMovie) {
        this.movieRepository.deleteMovie(movie);
    }

    likeMovie(movie: IMovie) {
        this.movieRepository.incrementLikes(movie);
    }
    dislikeMovie(movie: IMovie) {
        this.movieRepository.decrementLikes(movie);
    }
    getUpcomingMovies(country: string, language: string): Promise<IMovie[]> {
        return this.movieRepository.getUpcomingMovies(country, language);
    }

}