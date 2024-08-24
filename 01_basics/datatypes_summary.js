// Primitive and Non Primitive or Call by Value and Call by Reference

/* 
Primitive

String, Number, Boolean, null, undefined, Symbol, BigInt


Reference (Non Primitive)

Array, Objects, Functions

*/

// JS is Dynamic Typed Because In JavaScript, you don't need to specify the type of a variable when you declare it

const score = 100

let userEmail
console.log(userEmail)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) // false because Symbol creates a unique value



const heroes = ["wednesday", "aang", "mixpanel"]

const kz = {
    name: "kz",
    age: 21
}

let newFunc = function(){
    console.log("Hello World")
}

newFunc()

// console.log(typeof newFunc)

// ++++++++++++++ 2 Types of Memory
// Stack(for Primitive), Heap(for Reference)

let myPhone = "blackBerry11"
let anotherPhone = myPhone
anotherPhone = "google pixel 9"

console.log(myPhone)
console.log(anotherPhone)


const user ={
    email: "user@apple.com",
    pass: "mixpanel"
}

const user2 = user
user2.email = "mike@mixpanel.com"

console.log(user.email)