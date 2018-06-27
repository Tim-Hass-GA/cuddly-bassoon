console.log(`testing is here...!`)

const myPets = [
  {
    "name": "meowsalot",
    "species": "cat",
    "favFood": "tuna"
  },
  {
    "name": "brian",
    "species": "dog",
    "favFood": "carrots"
  }
]

console.log(myPets[1].name)

let data = myPets.map(function(pet){
  console.log(`${pet.name} is a ${pet.species} and really likes to eat ${pet.favFood}.`)

})
