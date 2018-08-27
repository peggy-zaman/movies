"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const review_1 = require("../entities/schema/review");
const inversify_1 = require("inversify");
let ReviewRepository = class ReviewRepository extends typeorm_1.Repository {
    getReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder("review")
                .where("review.id = :id", { id: 4004 }).getMany();
            //return this.find({relations:["movie"]});
        });
    }
    addReview(review) {
        return __awaiter(this, void 0, void 0, function* () {
            this.save(review);
            return review;
        });
    }
    deleteReview(review) {
        return __awaiter(this, void 0, void 0, function* () {
            this.remove(review);
        });
    }
};
ReviewRepository = __decorate([
    inversify_1.injectable(),
    typeorm_1.EntityRepository(review_1.Review)
], ReviewRepository);
exports.ReviewRepository = ReviewRepository;
// export function getRepository() {
//     const conn = getConnection();
//     const reviewRepository = conn.getRepository(Review);
//     return reviewRepository;
// }
//# sourceMappingURL=review_repository.js.map