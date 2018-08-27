import { IReview } from "../../entities/interfaces/review";
import { ReviewRepository } from "../../repositories/review_repository";

export interface IReviewService{
    reviewRepository:ReviewRepository;
    getReviews():Promise<IReview[]>;
    addReview(review:IReview):Promise<IReview>;
    deleteReview(review:IReview);

}