import { getConnection, Repository, EntityRepository } from "typeorm";
import { Review } from "../entities/schema/review";
import { IReview } from "../entities/interfaces/review";
import { injectable } from "inversify";
@injectable()
@EntityRepository(Review)
export class ReviewRepository extends Repository<IReview>{
    public async getReviews() :Promise<IReview[]>{
        // return this.createQueryBuilder("review")
        // .where("review.id = :id", { id: 4004 }).getMany();
        return this.find({relations:["movie"]});
    }

    public async addReview(review :IReview) :Promise<IReview>{
        this.save(review);
        return review;
    }

    public async deleteReview(review:IReview){
         this.remove(review);
    }
}


// export function getRepository() {
//     const conn = getConnection();
//     const reviewRepository = conn.getRepository(Review);
//     return reviewRepository;
// }
