console.log(`js is here...!`)
// const myPets = require('./testing')
// url https://learnwebcode.github.io/json-example/animals-1.json
// Async - javascript - xml AJAX...

// XMLHttpRequest
const daRequest = new XMLHttpRequest();
daRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
daRequest.onload = function(){
  // console.log(daRequest.responseText);
  let daData = JSON.parse(daRequest.responseText);
  // first object
  console.log(daData[0])
};
daRequest.send();
