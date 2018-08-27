import { IReviewService } from "../interfaces/review_service";
import { ReviewRepository } from "../../repositories/review_repository";
import { IReview } from "../../entities/interfaces/review";
import { getCustomRepository } from "typeorm";
import { injectable } from "inversify";

@injectable()
export class ReviewService implements IReviewService {
    reviewRepository: ReviewRepository= getCustomRepository(ReviewRepository);
    getReviews(): Promise<IReview[]> {
        return this.reviewRepository.getReviews();
    }
    addReview(review: IReview): Promise<IReview> {
        return this.reviewRepository.addReview(review);
    }
    deleteReview(review: IReview) {
        this.reviewRepository.deleteReview(review);
    
    }
}