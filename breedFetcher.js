const request = require('request');

const myArgs = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${myArgs[0]}`, (_error, _response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("not found");
  } else {
    console.log(data[0].description);
  }





});