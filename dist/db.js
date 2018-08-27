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
const typeorm_1 = require("typeorm");
const review_1 = require("./src/entities/schema/review");
const movie_1 = require("./src/entities/schema/movie");
/*
Please set the env var:

export DATABASE_USER=postgres \
export DATABASE_PASSWORD=secret \
export DATABASE_HOST=localhost \
export DATABASE_PORT=5432 \
export DATABASE_DB=demo

*/
function getDbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
        const DATABASE_USER = process.env.DATABASE_USER || "sa";
        const DATABASE_PORT = 1433;
        const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "yourStrong(!)Password";
        const DATABASE_DB = "Node";
        const entities = [
            movie_1.Movie,
            review_1.Review
        ];
        const conn = yield typeorm_1.createConnection({
            type: "mssql",
            host: DATABASE_HOST,
            port: DATABASE_PORT,
            username: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
            entities: entities,
            synchronize: true,
            logging: true
        });
        return conn;
    });
}
exports.getDbConnection = getDbConnection;
//# sourceMappingURL=db.js.map