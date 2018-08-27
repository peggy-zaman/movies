"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const review_repository_1 = require("../../repositories/review_repository");
const typeorm_1 = require("typeorm");
const inversify_1 = require("inversify");
let ReviewService = class ReviewService {
    constructor() {
        this.reviewRepository = typeorm_1.getCustomRepository(review_repository_1.ReviewRepository);
    }
    getReviews() {
        return this.reviewRepository.getReviews();
    }
    addReview(review) {
        return this.reviewRepository.addReview(review);
    }
    deleteReview(review) {
        this.reviewRepository.deleteReview(review);
    }
};
ReviewService = __decorate([
    inversify_1.injectable()
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review_service.js.map