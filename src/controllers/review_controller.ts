import * as express from 'express';
import { interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, requestBody, response } from 'inversify-express-utils';
import { Repository } from 'typeorm';

import { TYPES } from '../constants/types';
import { Review } from '../entities/schema/review';



@controller("/api/v1/reviews")
export class ReviewController implements interfaces.Controller {
    private readonly _reviewRepository: Repository<Review>;
    public constructor(
        @inject(TYPES.ReviewRepository) reviewRepository: Repository<Review>
    ) {
        this._reviewRepository = reviewRepository;
    }
    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this._reviewRepository.find();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/")
    public async post(@response() res: express.Response, @requestBody() newReview: Review) {
        // const review : Review = {
        //      id: 1,
        //      title: newReview.title,
        //      description: newReview.description,
        //      rating: newReview.rating

        // };

        // console.log("review: " + newReview.id + " " + newReview.title + " " + typeof(review));

        // if (newReview && !(typeof newReview.title === "string")) {
        //     res.status(400);
        //     res.send(`Invalid Review!`);
        // }
        try {
            const review: Review = Object.create(Review.prototype);
            Object.assign(review, newReview, {});
            //return await this._reviewRepository.save(review);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
}
