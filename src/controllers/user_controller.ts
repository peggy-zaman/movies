import { interfaces, controller, httpGet, httpPost, response, requestBody, requestParam, queryParam } from "inversify-express-utils";
import { TYPES } from "../constants/types";
import * as express from 'Express';
import { IUserService } from "../services/interfaces/user_service";
import { inject } from "inversify";
import { UserService } from "../services/implementations/user_service";
import { User } from "../entities/schema/user";
import { Movie } from "../entities/schema/movie";

@controller("/api/v1/user")
export class UserController implements interfaces.Controller {
    private userService: IUserService;
    constructor(@inject(TYPES.UserService) userService: IUserService) {
        this.userService = userService;
    }

    @httpGet("/")
    public async get(@response() res: express.Response) {
        try {
            return await this.userService.getUsers();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }

    }



    public async add(@response() res: express.Response, @requestBody() newUser: User) {
        try {
            const user = Object.create(User.prototype);
            Object.assign(user, newUser, {});
            return await this.userService.addUser(user);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
    @httpPost("/addFavorite")
    public async addMovieToFavorites(@response() res: express.Response, @queryParam("userId") userId: string, @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            await this.userService.addMovieToFavorites(+userId, movie)
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
    @httpGet("/WatchLaterMovies")
    public async getWatchLaterMovies(@response() res: express.Response, @queryParam("userId") userId: number) {
        try {
            return await this.userService.getWatchLaterMovies(userId)
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/removeFavorite")
    public async removeMovieFromFavorites(@response() res: express.Response, @queryParam("userId") userId: string, @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            await this.userService.removeMovieFromFavorites(+userId, movie)
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/addWatchLater")
    public async addMovieToWatchLater(@response() res: express.Response, @queryParam("userId") userId: string, @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            await this.userService.addMovieToWatchLater(+userId, movie)
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/removeWatchLater")
    public async removeMovieFromWatchLater(@response() res: express.Response, @queryParam("userId") userId: string, @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            await this.userService.removeMovieFromWatchLater(+userId, movie)
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
}