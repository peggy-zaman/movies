import { IUser } from "../../entities/interfaces/user";
import { UserRepository } from "../../repositories/user_repository";
import { IMovie } from "../../entities/interfaces/movie";

export interface IUserService {
    userRepository: UserRepository;
    getUsers(): Promise<IUser[]>;
    addUser(user: IUser): Promise<IUser>;
    deleteUser(user: IUser);
    addMovieToFavorites(userId: number, movie: IMovie);
    removeMovieFromFavorites(userId: number, movie: IMovie);
    addMovieToWatchLater(userId: number, movie: IMovie);
    removeMovieFromWatchLater(userId: number, movie: IMovie);

}