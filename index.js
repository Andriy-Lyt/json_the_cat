const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];
if (!breedName) {
  console.log('no breedName provided');
  return;
}
if (breedName && breedName.length > 3) {
  breedName = breedName.slice(0, 3);
}
// console.log("breedName: ", breedName);

fetchBreedDescription(breedName, (error, data) => {
  // console.log("error: ", error);
  // console.log("data.length: ", data.length);

  //check for errors
  if (error !== null) { 
    let err1 = 'Incorrect address provided.\n'+ error;
    console.log(err1);
    return err1;
  }; 
  if (data.length === 2) {
    // console.log('body.length: ', data.length);
    let resp2 = "invalid breed name provided";
    console.log(resp2);
    return resp2;
  }
  //if no error
  const parsedData =  JSON.parse(data);  
  const result = parsedData[0].description;
  console.log(result);
  return result;
});