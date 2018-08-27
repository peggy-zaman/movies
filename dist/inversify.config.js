"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("./src/constants/types");
const db_1 = require("./db");
const movie_service_1 = require("./src/services/implementations/movie_service");
const movie_controller_1 = require("./src/controllers/movie_controller");
exports.bindings = new inversify_1.AsyncContainerModule((bind) => __awaiter(this, void 0, void 0, function* () {
    yield db_1.getDbConnection();
    bind(types_1.TYPES.Controller).to(movie_controller_1.MovieController).whenTargetNamed("MovieController");
    bind(types_1.TYPES.MovieService).to(movie_service_1.MovieService);
}));
//# sourceMappingURL=inversify.config.js.map