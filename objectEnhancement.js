// function makePerson(first, last, age) {
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true
    }
}

// old way
const mathStuff = {
    x: 200,
    add: function (a, b) {
        return a + b
    },
    square: function (a) {
        return a * a
    } 
}
//mathStuff.add(8,9)
//mathStuff.square(8,9)

//DO NOT use arrow functions
const mathStuffTwo = {
    x: 200,
    add (a, b) {
        return a + b
    },
    square (a) {
        return a * a
    },
    multiply: (a, b) => {
        return a * b
    }
}

function makeColor(name, hex) {
    return {
        name: hex,
        hex: name
    }
}

const mystery = {
    [6 + 7]: 'thirteen'
}