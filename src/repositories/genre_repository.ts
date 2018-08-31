import { IGenre } from "../entities/interfaces/genre";
import { Repository, EntityRepository } from "typeorm";
import { injectable } from "inversify";
import { Genre } from "../entities/schema/genre";

@injectable()
@EntityRepository(Genre)
export class GenreRepository extends Repository<IGenre>{

    public async getGenres(): Promise<IGenre[]> {
        return this.find({ relations: ["movies"] });
    }

}