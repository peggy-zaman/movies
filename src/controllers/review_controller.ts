import { interfaces, controller, httpGet, response, httpPost, requestBody, httpDelete, httpPut } from "inversify-express-utils";
import { IMovieService } from "../services/interfaces/movie_service";
import { inject } from "inversify";
import * as express from 'Express';
import { TYPES } from "../constants/types";
import { IReviewService } from "../services/interfaces/review_service";
import { Review } from "../entities/schema/review";



@controller("/api/v1/review")
export class ReviewController implements interfaces.Controller {
   

    private reviewService: IReviewService;
    constructor(@inject(TYPES.ReviewService) reviewService: IReviewService) {
        this.reviewService = reviewService;
    }
    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this.reviewService.getReviews();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
    @httpPut("/")
    @httpPost("/")
    public async post(@response() res: express.Response, @requestBody() newReview: Review) {
        
        try {
            const review: Review = Object.create(Review.prototype);
            Object.assign(review, newReview, {});
            return await this.reviewService.addReview(review);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
}
