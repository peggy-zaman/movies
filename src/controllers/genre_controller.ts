import { interfaces, httpGet, controller, response } from "inversify-express-utils";
import { IGenreService } from "../services/interfaces/genre_service";
import { TYPES } from "../constants/types";
import { inject } from "inversify";
import { IGenre } from "../entities/interfaces/genre";
import * as express from 'Express';


@controller("/api/v1/genre")
export class GentreController implements interfaces.Controller {
    private gernreService: IGenreService;

    constructor(@inject(TYPES.GenreService) genreService: IGenreService) {
        this.gernreService = genreService;

    }

    @httpGet("/")
    public async getGenres(@response() res: express.Response, ) {
        try {
            return await this.gernreService.getGenres();
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

}