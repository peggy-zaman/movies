import { GenreRepository } from "../../repositories/genre_repository";
import { IGenre } from "../../entities/interfaces/genre";

export interface IGenreService{
    genreRepository:GenreRepository;
    getGenres():Promise<IGenre[]>;
}