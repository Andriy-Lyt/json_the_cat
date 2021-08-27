const request = require('request');

const fetchBreedDescription = function(breedName, cb) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return cb(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      cb(null, breed.description);
    } else {
      cb("Breed Not Found");
    }
                                      
  }); //closing request () 
}; // closing fetchBreedDescription()


module.exports = {
  fetchBreedDescription
}
