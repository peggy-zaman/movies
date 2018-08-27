"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const review_1 = require("../entities/schema/review");
function getRepository() {
    const conn = typeorm_1.getConnection();
    const reviewRepository = conn.getRepository(review_1.Review);
    return reviewRepository;
}
exports.getRepository = getRepository;
//# sourceMappingURL=review_repository.js.map