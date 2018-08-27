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

    public async addMovies(movie :IMovie) :Promise<IMovie>{
        this.insert(movie);
        return movie;
    }

    public async deleteMovie(movie:IMovie){
         this.remove(movie);
    }
}
