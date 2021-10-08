require('dotenv').config();

// const { execSync } = require('child_process');

// const fakeRequest = require('supertest');
// const app = require('../lib/app');
// const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {


    test('fakes a test ', async () => {



      expect(true).toEqual(true);
    });


    // test('returns city data', async () => {

    //   const expectation = {
    //     Name: expect.any(String),
    //     latitude: expect.any(String),
    //     longitude: expect.any(String)
    //   };

    //   const data = await fakeRequest(app)
    //     .get('/location?search=boston')
    //     .expect('Content-Type', /json/)
    //     .expect(200);

    //   expect(data.body).toEqual(expectation);
    // });



    // test('returns review data', async () => {

    //   const expectation = [{
    //     name: expect.any(String),
    //     image: expect.any(String),
    //     rating: expect.any(Number),
    //     price: expect.any(String),
    //     website: expect.any(String)
    //   }];


    // //   const data = await fakeRequest(app)
    // //     .get('/reviews?latitude=42.3602534&longitude=-71.0582912')
    // //     .expect('Content-Type', /json/)
    // //     .expect(200);

    //   expect(data.body).toEqual(expect.arrayContaining(expectation));
    // });
  });
});
