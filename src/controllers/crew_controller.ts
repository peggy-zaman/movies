import { interfaces, controller, httpGet, response, httpPost, requestBody, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import * as express from 'Express';
import { TYPES } from "../constants/types";
import { IReviewService } from "../services/interfaces/review_service";
import { ICrewService } from "../services/interfaces/crew_service";
import { Crew } from "../entities/schema/crew";



@controller("/api/v1/crew")
export class CrewController implements interfaces.Controller {


    private crewService: ICrewService;
    constructor(@inject(TYPES.CrewService) crewService: ICrewService) {
        this.crewService = crewService;
    }
    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this.crewService.getCrews();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
    @httpPut("/")
    @httpPost("/")
    public async post(@response() res: express.Response, @requestBody() newCrew: Crew) {

        try {
            const crew: Crew = Object.create(Crew.prototype);
            Object.assign(crew, newCrew, {});
            return await this.crewService.addCrews(crew);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
}
