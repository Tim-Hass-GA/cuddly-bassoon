console.log(`js is here...!`)
// const myPets = require('./testing')
// url https://learnwebcode.github.io/json-example/animals-1.json
// Async - javascript - xml AJAX...
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");
let pageCount = 1;

btn.addEventListener("click", function(){
  // XMLHttpRequest
  const daRequest = new XMLHttpRequest();
  daRequest.open("GET", `https://learnwebcode.github.io/json-example/animals-${pageCount}.json`);
  daRequest.onload = function(){
    // TESTING
    // console.log(daRequest.responseText);
    // ERROR HANDLING
    if (daRequest.status >= 200 && daRequest.status < 400){
      let daData = JSON.parse(daRequest.responseText);
      // first object
      // console.log(daData[0])
      renderHTML(daData);
    } else {
      // handle the error
      console.log("connected to the server, but it returned an error");
    }
  };

  daRequest.onerror = function(){
    // handle the error for the XMLHttpRequest
    console.log("connection error");
  };

  daRequest.send();

  pageCount++;
  if (pageCount > 3) {
    btn.classList.add("hide-me");
    animalContainer.insertAdjacentHTML("afterEnd", "<p>No more data</p>");
  }
})

function renderHTML(data){
  let htmlString = '';
  for (let i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    for (let j = 0; j < data[i].foods.likes.length; j++){
      if (j === 0){
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += " and " + data[i].foods.likes[j];
      }
    }

    htmlString += " and dislikes ";

    for (let j = 0; j < data[i].foods.dislikes.length; j++){
      if (j === 0){
        htmlString += data[i].foods.dislikes[j];
      } else {
        htmlString += " and " + data[i].foods.dislikes[j];
      }
    }

    htmlString += ".</p>"
  }
  // data.map(function(item){
  //   htmlString += '<p>' + item.name + '</p>'
  // })
  animalContainer.insertAdjacentHTML("beforeend", htmlString)
}
