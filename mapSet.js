new Set([1,1,2,2,3,4])
// 1,2,3,4

// [...new Set("referee")].join("")
// ref


// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}


// an alias of hasDuplicate called to an array parameter the size of the 'arr' in the new Set does not equal the length of arr


function isVowel(char) {
    return "aeiou".includes(char)
}

function vowelCount(str) {

    // create a new Map with the alias of vowelMap
    // iterate over the str
    // set the current index to be lowercase give it an alias of lowerCaseChar
    // if the isVowel at the current index
    // if the vowelMap HAS a lowerCaseChar
    // set vowelMap at the current lowerCaseChar, get the vowelMap at the currentCaseChar to increment by 1
    // else
    // set vowelMap at the lowerCaseChar, 1


    // return vowelMap

    const vowelMap = new Map()
    for (let i = 0; i < str.length; i++ ) {
        const lowerCaseChar = str[i].toLowerCase()
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1) 
            } else {
                vowelMap.set(lowerCaseChar, 1)
                }
            }
    }
    return vowelMap
    }
