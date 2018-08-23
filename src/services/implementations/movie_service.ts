import { injectable } from "inversify";
import { IMovieService } from "../interfaces/movie_service";
import { IMovie } from "../../entities/interfaces/movie";
import { getCustomRepository } from "typeorm";
import { MovieRepository } from "../../repositories/movie_repository";

@injectable()
export class MovieService implements IMovieService{
    public async getMovies(): Promise<IMovie[]> {
        const movieRepository=await getCustomRepository(MovieRepository);
        return movieRepository.getMovies();
    }

}