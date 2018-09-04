import { IUserService } from "../interfaces/user_service";
import { IUser } from "../../entities/interfaces/user";
import { UserRepository } from "../../repositories/user_repository";
import { injectable } from "inversify";
import { getCustomRepository } from "typeorm";
import { IMovie } from "../../entities/interfaces/movie";

@injectable()
export class UserService implements IUserService {

   
    getWatchLaterMovies(userId: number): Promise<IMovie[]> {
        return this.userRepository.getWatchLaterMovies(userId);
    }
    addMovieToWatchLater(userId: number, movie: IMovie) {
        return this.userRepository.addMovieToWatchLater(userId, movie);
    }
    removeMovieFromWatchLater(userId: number, movie: IMovie) {
        return this.userRepository.removieMovieFromWatchLater(userId, movie);
    }
    removeMovieFromFavorites(userId: number, movie: IMovie) {
        return this.userRepository.removeMovieFromFavorites(userId, movie);
    }
    userRepository: UserRepository = getCustomRepository(UserRepository);
    getUsers(): Promise<IUser[]> {
        return this.userRepository.getUsers();
    }
    addUser(user: IUser): Promise<IUser> {
        return this.userRepository.addUser(user);
    }
    deleteUser(user: IUser) {
        return this.userRepository.deleteUser(user);
    }
    addMovieToFavorites(userId: number, movie: IMovie) {
        this.userRepository.addMovieToFavorites(userId, movie);
    }
}