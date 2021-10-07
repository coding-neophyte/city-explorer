const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();

// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route.
// each requires a POST body with a .email and a .password
app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
app.get('/api/test', (req, res) => {
  res.json({
    message: `in this proctected route, we get the user's id like so: ${req.userId}`
  });
});

app.get('/location', async (req, res) => {
  try {
    // const city = req.query.search;

    // const response = await this.request.get('')

    res.json({
      'formatted_query': 'Seattle, WA, USA',
      'latitude': '47.606210',
      'longitude': '-122.332071'
    });
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async (req, res) => {
  try {
    // const city = req.query.search;

    // const response = await this.request.get('')

    res.json([
      {
        'forecast': 'Partly cloudy until afternoon.',
        'time': 'Tuesday, June 29, 2021'
      },

    ]);
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    // const city = req.query.search;

    // const response = await this.request.get('')

    res.json([
      {
        'name': 'Pike Place Chowder',
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg',
        'price': '$$   ',
        'rating': '4.5',
        'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA'
      },
      {
        'name': 'Umi Sake House',
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg',
        'price': '$$   ',
        'rating': '4.0',
        'url': 'https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA'
      },

    ]);
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});



app.use(require('./middleware/error'));

module.exports = app;
