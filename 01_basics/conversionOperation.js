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
// console.log(typeof numToString) // string


let ok = Number(null)
// console.log(ok) // returns 0





// ********************  OPERATIONS *******************

let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " kz"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // 12
console.log(2 + "1") // 21
console.log("1" + 2 + 2) // 122 This behavior is called type coercion
console.log(1 + 2 + "2") // 32 


console.log(+true) // 1
console.log(1+true) // 2
console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

console.log(num1)


let gameCounter = 100
gameCounter++   // this makes gameCounter to increase 1
console.log(gameCounter) // logs 101
console.log(gameCounter++) // logs 101 why?? because it is logged before adding
console.log(gameCounter) // since 1 is added above it now becomes 102

// but if I prefix the operator it'll do increment first then logs
console.log(++gameCounter)  // returns 103

// in summary:
// Prefix returns the value after the increment.
// Postfix returns the value before the increment.

