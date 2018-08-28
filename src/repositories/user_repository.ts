import { IUser } from "../entities/interfaces/user";
import { Repository, EntityRepository } from "typeorm";
import { injectable } from "inversify";
import { User } from "../entities/schema/user";
import { IMovie } from "../entities/interfaces/movie";
import { MovieRepository } from "./movie_repository";

@injectable()
@EntityRepository(User)
export class UserRepository extends Repository<IUser> {
    public async getUsers(): Promise<IUser[]> {
        return this.find({ relations: ["movies"] });
    }

    public async addUser(user: IUser): Promise<IUser> {
        return this.save(user);
    }
    public async deleteUser(user: IUser): Promise<IUser> {
        return this.remove(user);
    }
    public async addMovieToFavorites(userId: number, movie: IMovie) {

        return this.createQueryBuilder()
            .relation(User, "favoriteMovies")
            .of(userId)
            .add(movie.id);


        // const user = await this.findOne(userId, {relations:["movies"]});

        // if (user !== undefined) {

        //     user.movies.push(movie);

        //     const userObj = Object.create(User.prototype);
        //     Object.assign(userObj, user, {});

        //     this.insert(userObj);
        // }
    }
    public async removeMovieFromFavorites(userId: number, movie: IMovie) {
        return this.createQueryBuilder()
            .relation(User, "favoriteMovies")
            .of(userId)
            .remove(movie.id);
    }
    public async addMovieToWatchLater(userId: number, movie: IMovie) {
        return this.createQueryBuilder()
            .relation(User, "watchLaterMovies")
            .of(userId)
            .add(movie.id);
    }
    public async removieMovieFromWatchLater(userId: number, movie: IMovie) {
        return this.createQueryBuilder()
            .relation(User, "watchLaterMovies")
            .of(userId)
            .remove(movie.id);

    }
}