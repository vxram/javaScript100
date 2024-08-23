// let score = undefined
// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log( typeof valueInNumber)
// console.log(valueInNumber)

// let score2 = null
// console.log(score2) // null

// let val2 = Number(score2) // this conversion makes null to 0
// console.log(val2) 


/* 

if converting to Number():

"33" => 33
"33abc" => NaN
true => 1 , false => 0
null => 0
undefined => NaN

*/

let isLoggedIn = " "
let booleanVersion = Boolean(isLoggedIn)
console.log(booleanVersion) // logs true

// Boolean() will convert
//  "", NaN, null, undefined, 0 to false
//  -ve nums, +ve nums, " " (inverted comma with space) to true, 

let num = 22

let numToString = String(22)
console.log(typeof numToString) // string

