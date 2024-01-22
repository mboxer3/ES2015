//14.4 ARGUMENTS OBJECT

//instead of doing this
function wrong(a, b, c, d, e, f, g) {
    console.log("WRONG")
}

// function max() {
//     console.log(arguments)
// }

// arguments object is not an array. it is an array-like-object (a very weak watered down like array)
function sum() {
    // to turn "Arguments into an array" give it an alias and call it to .reduce
    const args = Array.from(arguments)
    return args.reduce((sum, val) => {
        return sum + val
    })
}

// arguments   DO NOT   exist in arrow functions
// const max = () => {
//     console.log(arguments);
// }

const max = function () {
    const args = Array.from(arguments)
    return args.reduce((accumulator, currentVal) => {
        return currentVal > max ? currentVal : max
    })
}

// 14.4 STOP OPERATOR
// inside of a function parameter list if you see 3 dots followed by a parameter it is the rest operator
// collects all the arguments but is an actual array
// whatever you name the dots you will have access to as an array inside the function

function sum(...nums) {
    return nums.reduce((accumulator, currentVal) => accumulator + currentVal)
}

const sumAll = (...values) => {
    if (!values.length) return undefined
    return values.reduce((accumulator, currentVal) => accumulator + currentVal)
}


// you can also specify names parameters and collect the rest
function makeFamily(parent1, parent2, ...children) {
    return {
        parents: [parent1, parent2],
        kids: children.length ? children : 0
    }
}

const filterByType = (type, ...vals) => {
    // we can use the built in .filter because vals is an array
    return vals.filter((v) => typeof v === type)
}

function practiceForNothing(a, b, ...rest) {
    // a will be stores in a
    // b will be stored in B
    // the rest will be stored in ...rest
}







//14.4 SPREAD FUNCTION CALLS
// YOU CAN USE SPREAD IN AN OBJECT & AN ARRAY
// spread you can use in different scenarios

const nums = [1, 4, 5, 6]
//this will take the array 
// basically iterates over the array
// takes each element and adds it as an individual argument
Math.max(...nums)



// const filterByType = (type, ...vals) => {
//     // we can use the built in .filter because vals is an array
//     return vals.filter((v) => typeof v === type)
// }
const things = [23, 34, true, false, 0, 'hello', 'goodbye', undefined]
//instead of typing everthing in 'things' you can spread
filterByType('string', ...things)

console.log(..."HELLO")
// is the same as 
console.log("H", "e", "L", "L", "O")






// spread array literals
const palette = ["blue", "red", "green", "orange", "purple"]
// how to make a copy using the spread operator and add a new value
const paletteCopy = ['pink', ...palette, 'sky-blue']


const sodas = ['coke', 'pepsi']
const juices = ['orange', 'apple']
const milkshakes = ['cookies & cream', 'vanilla']
const pizzas = ['cheese', 'veggies']

const allDrinks = [...sodas, ...juices, ...milkshakes]

const unhealthy = [...sodas, ...milkshakes,]

// you can also spread strings into an array
const vowels = 'aeiou'
const vowelsArr = [...vowels]



//spread objects literal
const tea = {
    type: 'oolong',
    name: 'winter sproud',
    origin: "taiwan"
}

const teaData = {
    steepTime: '30s',
    brewTemp: 175
}

// object is not iterable (cannot iterate over objects)
// you can use spread inside an object just like inside an array 
// BUT  it will behave differently

// we are making a copy of the object but it is not the same refrence
const tea2 = { ...tea }

const teaTin = { ...tea, price: 22.99 }

//this will cause the tea name to be changed
const newTea = { ...tea, name: 'golden frost' }
// this will cause the new name to be ignored because order does matter when dealing with objects
const newTea2 = { name: 'golden', ...tea }


const fullTea = { ...tea, ...teaData, origin: 'china' }


