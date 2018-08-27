"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const express = require("Express");
const types_1 = require("../constants/types");
const review_1 = require("../entities/schema/review");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    get(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.reviewService.getReviews();
            }
            catch (e) {
                res.status(500);
                res.send(e.message);
            }
        });
    }
    post(res, newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const review = Object.create(review_1.Review.prototype);
                Object.assign(review, newReview, {});
                return yield this.reviewService.addReview(review);
            }
            catch (e) {
                res.status(500);
                res.send(e.message);
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __param(0, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "get", null);
__decorate([
    inversify_express_utils_1.httpPut("/"),
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.response()), __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, review_1.Review]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "post", null);
ReviewController = __decorate([
    inversify_express_utils_1.controller("/api/v1/review"),
    __param(0, inversify_1.inject(types_1.TYPES.ReviewService)),
    __metadata("design:paramtypes", [Object])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review_controller.js.map