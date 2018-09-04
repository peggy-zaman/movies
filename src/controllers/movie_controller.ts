import { interfaces, controller, httpGet, response, httpPost, requestBody, httpDelete, queryParam, httpPut } from "inversify-express-utils";
import { IMovieService } from "../services/interfaces/movie_service";
import { inject } from "inversify";
import * as express from 'Express';
import { TYPES } from "../constants/types";
import { IMovie } from "../entities/interfaces/movie";
import { Movie } from "../entities/schema/movie";

@controller("/api/v1/movie")
export class MovieController implements interfaces.Controller {

    private movieService: IMovieService;
    constructor(@inject(TYPES.MovieService) movieService: IMovieService) {
        this.movieService = movieService;
    }
    @httpGet("/")
    public async getMovies(@response() res: express.Response) {
        try {
            return await this.movieService.getMovies();
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpGet("/UserList")
    public async getUsers(@response() res: express.Response, @queryParam("movieId") movieId: number) {
        try {
            return await this.movieService.getUsersWhoFavoritedMovie(movieId);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }

    }
    @httpGet("/upcomings")
    public async getUpcomingMovies(@response() res: express.Response, @queryParam("country") country: string, @queryParam("language") language: string) {
        try {
            return await this.movieService.getUpcomingMovies(country, language);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpGet("/actions")
    public async getActiongMovies(@response() res: express.Response) {
        try {
            return await this.movieService.getActionMovies();
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpPost("/")
    public async addMovies(
        @response() res: express.Response,
        @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            this.movieService.addMovies(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    @httpDelete("/")
    public async deleteMovie(
        @response() res: express.Response,
        @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            this.movieService.deleteMovie(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpPut("/like")
    public async likeMovies(
        @response() res: express.Response,
        @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            this.movieService.likeMovie(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpPut("/dislike")
    public async dislikeMovies(
        @response() res: express.Response,
        @requestBody() newMovie: Movie) {
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie, newMovie, {});
            this.movieService.dislikeMovie(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

}
