import { interfaces, controller, httpGet, response } from "inversify-express-utils";
import { IMovieService } from "../services/interfaces/movie_service";
import { inject } from "inversify";
import * as express from 'Express';
import { TYPES } from "../constants/types";
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
}
