import { Repository, EntityRepository } from "typeorm";
import { Movie } from "../entities/schema/movie";
import { injectable } from "inversify";
import { IMovie } from "../entities/interfaces/movie";

@injectable()
@EntityRepository(Movie)
export class MovieRepository extends Repository<IMovie>{
    public async getMovies() :Promise<IMovie[]>{
        return this.find({relations:["reviews"]});
    }

    public async addMovies(movie :Movie) :Promise<IMovie>{
        this.insert(movie);
        this.save(movie);
        return movie;
    }
}
