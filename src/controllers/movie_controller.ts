import { interfaces, controller, httpGet, response, httpPost, requestBody, httpDelete } from "inversify-express-utils";
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
    public async getMovies(@response() res: express.Response){
        try {
            return await this.movieService.getMovies();
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    @httpPost("/")
    public async addMovies( 
        @response() res: express.Response,
        @requestBody() newMovie: Movie ){
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie,newMovie, {});
           this.movieService.addMovies(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    @httpDelete("/")
    public async deleteMovie( 
        @response() res: express.Response,
        @requestBody() newMovie: Movie ){
        try {
            const movie = Object.create(Movie.prototype);
            Object.assign(movie,newMovie, {});
           this.movieService.deleteMovie(movie);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
}
