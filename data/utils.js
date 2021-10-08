function grabLocationData(body) {
  return {
    Name: body.display_name,
    latitude: body.lat,
    longitude: body.lon
  };
}



function grabWeatherData(weatherData) {

  const forecast = weatherData.slice(0, 7);
  const weatherArray = forecast.map(weather => {
    return {
      forecast: weather.temp,
      time: weather.datetime,

    };
  });
  return weatherArray;
}

function grabReviewData(reviewData) {
  return reviewData.map(review => {
    return {
      name: review.name,
      image: review.image_url,
      rating: review.rating,
      price: review.price,
      website: review.url
    };
  }
  );
}
module.exports = {
  grabLocationData, grabWeatherData, grabReviewData
};

//functions done
//functions
