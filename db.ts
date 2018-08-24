import { createConnection } from "typeorm";

import { Review } from "./src/entities/schema/review";
import { Movie } from "./src/entities/schema/movie";

/*
Please set the env var:

export DATABASE_USER=postgres \
export DATABASE_PASSWORD=secret \
export DATABASE_HOST=localhost \
export DATABASE_PORT=5432 \
export DATABASE_DB=demo

*/

export async function getDbConnection() {

    const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
    const DATABASE_USER = process.env.DATABASE_USER || "sa";
    const DATABASE_PORT = 1433;
    const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "yourStrong(!)Password";
    const DATABASE_DB = "Node";

    const entities = [
        Movie,
        Review
    ];

    const conn = await createConnection({
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

}
