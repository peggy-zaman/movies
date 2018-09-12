import { Repository, EntityRepository } from "typeorm";
import { Movie } from "../entities/schema/movie";
import { injectable } from "inversify";
import { IMovie } from "../entities/interfaces/movie";
import { IUser } from "../entities/interfaces/user";
import { User } from "../entities/schema/user";
import { Crew } from "../entities/schema/crew";

@injectable()
@EntityRepository(Movie)
export class MovieRepository extends Repository<IMovie>{
    public async getMovies(): Promise<IMovie[]> {
        return this.find({ relations: ["reviews"] });
    }
    public async getMoviesForCrew(crewId: number): Promise<IMovie[]> {
        return this.createQueryBuilder().relation(Crew, "movies").of(crewId).loadMany();
    }
    public async getUsersWhoFavoritedMovie(movieId: number): Promise<IUser[]> {
        return this.createQueryBuilder()
            .relation(Movie, "users")
            .of(movieId)
            .loadMany();
    }
    public async getActionMovies(): Promise<IMovie[]> {
        // return this.createQueryBuilder("review")
        // .where("review.id = :id", { id: 4004 }).getMany();
        return this.createQueryBuilder('q').where("q.genre= :genre", { genre: 1 }).getMany();
    }

    public async addMovies(movie: IMovie): Promise<IMovie> {
        this.insert(movie);
        return movie;
    }

    public async deleteMovie(movie: IMovie) {
        this.remove(movie);
    }

    public async incrementLikes(movie: IMovie) {
        this.increment({ id: movie.id }, "likeCounter", 1);
    }

    public async decrementLikes(movie: IMovie) {
        this.decrement({ id: movie.id }, "likeCounter", 1);
    }
    public async getUpcomingMovies(country: string, language: string): Promise<IMovie[]> {
        const todayDate = new Date();
        const daysBefore = todayDate.getDate() - 3;
        const daysAfter = todayDate.getDate() + 2;
        const before: Date = new Date(todayDate.getFullYear(), todayDate.getMonth(), daysBefore, todayDate.getHours(), todayDate.getMinutes(), todayDate.getSeconds());
        const after: Date = new Date(todayDate.getFullYear(), todayDate.getMonth(), daysAfter, todayDate.getHours(), todayDate.getMinutes(), todayDate.getSeconds());
        return this.createQueryBuilder('q').where(`q.release_date BETWEEN 
        '${before.toISOString()}' AND '${after.toISOString()}'
        AND q.language=language AND q.country= country`)
            .getMany();
    }
}
