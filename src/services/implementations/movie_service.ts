import { injectable } from "inversify";
import { IMovieService } from "../interfaces/movie_service";
import { IMovie } from "../../entities/interfaces/movie";
import { getCustomRepository } from "typeorm";
import { MovieRepository } from "../../repositories/movie_repository";

@injectable()
export class MovieService implements IMovieService {
    movieRepository = getCustomRepository(MovieRepository);

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
        this.movieRepository.updateLikes(movie);
    }

}