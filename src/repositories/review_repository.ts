import { getConnection } from "typeorm";
import { Review } from "../entities/schema/review";

export function getRepository() {
    const conn = getConnection();
    const reviewRepository = conn.getRepository(Review);
    return reviewRepository;
}
