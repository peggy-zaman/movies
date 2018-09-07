import { expect } from 'chai';
import 'mocha';
import * as supertest from 'supertest';
import { assert } from 'console';
const express = require('express');
const request = supertest('http://localhost:3000/api/v1');

describe('GET / movie', () => {
    it('should respond with json', function (done) {
        request.get('/movie')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) done(err);

                expect(res.body).to.have.length.above(2);
                expect(res.body[0].id, '1004');
                done();
            });
    });
});

describe('GET / UserList', () => {
    it('should respond with json', function (done) {
        request.get('movie/UserList')
            .send('movieId=3007')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) done(err);

                expect(res.body).to.have.length.above(2);
                done();
            });
    });
});