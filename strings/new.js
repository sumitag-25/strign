const name = "sumit"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// -------------------   String Methods ------------------------

const game = new String('Sumit-vr-con')

// console.log(typeof name)
// console.log(typeof game)

// console.log(game[0])
// console.log(game.__proto__);

// console.log(game.length)
// console.log(game.toUpperCase());
// console.log(game.anchor());
// console.log(game);
// console.log(game.charAt(4)) //find character of position
// console.log(game.indexOf('t')); //find position of character

// const newString = game.substring(0,5)

// console.log(newString)

// console.log(game.slice(2, 5))

// const newStringOne = "     sumit verma   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://sumit.com/sumit%20verma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sumit'))

console.log(game.split('-'))

console.log(game.small())