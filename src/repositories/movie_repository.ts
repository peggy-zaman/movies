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
        const daysBefore = todayDate.getDate() - 3;
        const daysAfter = todayDate.getDate() + 2;
        const before: Date = new Date(todayDate.getFullYear(), todayDate.getMonth() ,daysBefore,todayDate.getHours(),todayDate.getMinutes(),todayDate.getSeconds());
        const after: Date = new Date(todayDate.getFullYear(),todayDate.getMonth(),daysAfter,todayDate.getHours(),todayDate.getMinutes(),todayDate.getSeconds());
        return this.createQueryBuilder('q').where(`q.release_date BETWEEN 
        '${before.toISOString()}' AND '${after.toISOString()}'
        AND q.language=language AND q.country= country`)
            .getMany();
    }
}
