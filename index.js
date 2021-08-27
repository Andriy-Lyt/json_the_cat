const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("error fetch details: ", error);
  } else {
    console.log("desc: ", desc);
  }
});
