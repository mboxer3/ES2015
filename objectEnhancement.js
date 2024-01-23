/* Write an ES2015 Version */

function createInstructor(firstName, lastName) {
  return {
      firstName,
      lastName
  }
}


/* Write an ES2015 Version */
const favoriteNumber = 42

const instructorOne = {
  firstName: "colt",
  [favoriteNumber]: "that is my favorite number"
}

/* Write an ES2015 Version */

const instructor = {
  firstName: "colt",
  sayHi() {
      return "hi"
  },
  sayBye() {
      return this.firstName + " says bye!"
  }
}


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
return {
  species,
  [verb](){
    return noise;
  }
}
}
