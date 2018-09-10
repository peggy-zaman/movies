import "reflect-metadata";
import * as supertest from "supertest";
import { expect } from "chai";
import * as inversify from "inversify";
import * as express from "express";
import * as bodyParser from "body-parser";
import { injectable, Container } from "inversify";
import * as Bluebird from "bluebird";
import { interfaces, InversifyExpressServer, cleanUpMetadata } from "inversify-express-utils";
import {
    controller, httpMethod, all, httpGet, httpPost, httpPut, httpPatch,
    httpHead, httpDelete, response, requestParam,
    requestBody, queryParam, requestHeaders, cookies,
    next
} from "inversify-express-utils";
import { it, describe, beforeEach } from "mocha";
import { rejects } from "assert";

describe("Integration Tests:", () => {

    beforeEach((done) => {
        cleanUpMetadata();
        done();
    });

    describe("Routing & Request Handling:", () => {

        it("should work for async controller methods", (done) => {

            @controller("/")
            class ReviewController {
                @httpGet("/") public getTest(req: express.Request, res: express.Response) {
                    return new Promise(((resolve) => {
                        setTimeout(resolve, 100, "GET");
                    }));
                }
            }
            const request = supertest('http://localhost:3000/api/v1');
            request
                .get("/review")
                .expect(200, done);
        });

        it("should work for async controller methods that fails", (done) => {

            @controller("/")
            class ReviewController {
                @httpGet("/") public getTest(req: express.Request, res: express.Response) {
                    return new Bluebird(((resolve, reject) => {
                        setTimeout(() => {
                            reject();
                        }, 100, "GET");
                    }));
                }
            }
            const request = supertest('http://localhost:3000/api/v1');
            request
                .get("/review")
                .expect(500, done);
        });
    });

});