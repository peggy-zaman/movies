import { IGenreService } from "../interfaces/genre_service";
import { GenreRepository } from "../../repositories/genre_repository";
import { IGenre } from "../../entities/interfaces/genre";
import { injectable } from "inversify";
import { getCustomRepository } from "typeorm";

@injectable()
export class GenreService implements IGenreService {
    genreRepository = getCustomRepository(GenreRepository);;
    getGenres(): Promise<IGenre[]> {
        return this.genreRepository.getGenres();
    }
}