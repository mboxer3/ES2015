//arrow functions are meant to replace an anoymous function 
// which includes the functions below
const adding = function (x, y) {
    return x + y
}


Array.map(function (x) {
    return x * 2
})

// they CANNOT replace a function declration
function greet() {
    console.log("hi")
}

// this if how you use an arrow function
const add = (x, y) => {
    return x + y
}

// they are ideal for callbacks
// without arrow functions
[2, 3, 6, 78, 99, 104, 23].reduce(function (accumulator, currentVal) {
    Math.max(accumulator, currentVal);
})

    // with arrow functions
[2, 3, 6, 78, 99, 104, 23].reduce((accumulator, currentVal) => {
    return Math.max(accumulator, currentVal)
})

































// 14.3 shortcuts
[1, 2, 3, 4, 5, 6].forEach((n) => {
    console.log(n * 10);
})

// you do not need to add parens ONLY IF YOU HAVE ONE PARAMETER. NOT if you have more than one.
[1, 2, 3, 4].forEach(n => {
    console.log(n * 10);
})

const greet = () => {
    console.log('Hello')
}



[1, 2, 3, 4, 5, 6].filter(function (num) {
    return num % 2 === 0
})

    //implicit return: only works if you have a single expression in the body of your function
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0)


// short method
const double = (n) => n * 2
// long method
const longDouble = (n) => {
    return n * 2
}


// not using implicit return
[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
    if (n % 2 === 0) {
        return 'even'
    }
    return odd
})

[1, 2, 3, 4, 5, 6].map((n) => (n % 2 === 0 ? 'even:' : 'odd'))




const snowfallTotal = [[1, 2, .35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.5]]
snowfallTotal.map((hourlySnowfallTotal) => {
    return hourlySnowfallTotal.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    })
})

//implicit returns
snowfallTotal.map((hourlySnowfallTotal) => hourlySnowfallTotal.reduce((accumulator, currentVal) => {accumulator + currentVal
    })
)














// gotchas two things to look out for

// javascript gets confused it sees an arrow function, num is a single parameter
// then it hits a curly brace, it thinks it's a curly brace from a function not an object literal
// it thinks the first paren is the begining and the second is the end

// const makeMath = (num) => {
//         square: num * num,
//         double: num * 2
//     }


    const makeMath = (num) => ({
        square: num * num,
        double: num * 2
    })





















// arrow function & this
const cat = {
    name: "bubs",
    meow: function () {
        return `${this.name} says MEOW!`
    }
}

const pet = {
    name: "bubs",
    bark: () => {
        return `${this.name} says BARK!`
    }
}
//difference between an arrow function and a regular function expression
// so to add a method to an object. it's always best to use a regular function expression
// NOT AN ARROW FUNCTION


// MUST PUT PARENTHESES AROUND PARAMETERS IF THERE ARE 0 OR 2+ PARAMETERS
// return statement is implied if you leave out curly braces
// they do not make their own "this"


function double(arr) {
    return arr.map(function (val) {
        return val * 2
    })
}

const double = arr => arr.map(val => val * 2)

// [1, 2, 3, 4].forEach(n => {
//     console.log(n * 10);
// })

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
// }
  
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)