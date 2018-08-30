import { Repository, EntityRepository } from "typeorm";
import { Movie } from "../entities/schema/movie";
import { injectable } from "inversify";
import { IMovie } from "../entities/interfaces/movie";

@injectable()
@EntityRepository(Movie)
export class MovieRepository extends Repository<IMovie>{
    public async getMovies(): Promise<IMovie[]> {
        return this.find({ relations: ["reviews"] });
    }

    public async addMovies(movie: IMovie): Promise<IMovie> {
        this.insert(movie);
        return movie;
    }

    public async deleteMovie(movie: IMovie) {
        this.remove(movie);
    }

    public async updateLikes(movie: IMovie) {
        this.save(movie);
    }
    public async getUpcomingMovies(country: string, language: string): Promise<IMovie[]> {
        const todayDate = new Date();
        const before: string = (todayDate.getFullYear(), + '-' + todayDate.getMonth(), + '-' + todayDate.getDate() - 2 + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds());
        const after: string = (todayDate.getFullYear(), + '-' + todayDate.getMonth(), + '-' + todayDate.getDate() + 2 + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds());
        return this.createQueryBuilder('q').where(`q.release_date BETWEEN 
        ${before} AND ${after} 
        AND q.language=language AND q.country= country`)
            .getMany();
    }
}
