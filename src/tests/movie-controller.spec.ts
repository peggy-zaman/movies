import { expect } from 'chai';
import 'mocha';
import * as request from 'supertest';
import { assert } from 'console';
const express = require('express');
const app = express();

describe('GET / movie', () => {



    it('should respond with json', function () {
        return request(app)
            .get('http://localhost:3000/api/v1/movie')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('Content-Length', '19')
            .then(response => {
            })

    });

});