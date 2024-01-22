// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(args)


// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })


// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]








/** remove a random element in the items array
and return a new array without that item. */

// create a const with the parameter of items set to an arrow function
const removeRandom = items => {
    // create an alias for a number rounded down let the number be random and mulitply it by the length of the items parameter
    let idx = Math.floor(Math.random() * items.length)
    // return the rest of the (spread) items .slice at the first index and the ending index (idx)
    // (continued...) return the rest of the (spread) items .slice  (idx + 1)
    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}

/** Return a new array with every item in array1 and array2. */

// create an extended const with the paramaters array1, array2 followed by the arrow function
const extend = (array1, array2) => {
    //return the rest of array1 and array2
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

//create a const of addKeyVal and give it the parameters of 'obj','key','val' followed by the arrow function
const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj }
    newObj(key) = val
    return newObj
}
// create an object and call it to the rest of the obj
// call the key to the newObj and set it to val
    // return newObj



/** Return a new object with a key removed. */

const removedKey = (obj, key, val) => {
    const newObj = { ...obj }
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (array1, array2) => {
    return {...array1, ...array2}
}

/** Return a new object with a modified key and value. */

const updated = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = value 
    return newObj
}