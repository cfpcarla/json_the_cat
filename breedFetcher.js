const request = require('request');
const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (_error, _response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed ${breed} not found`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };