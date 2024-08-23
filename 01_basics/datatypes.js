"use strict"; // treat all js code as newer version

/* 

use strict basically means treat all js as newer version:
hence the below code will through an error

x = 12
console.log(x)

but as you know that if i don't use "use strict" it will not throw
an error and console log 12

*/

// alert("hello") // not available in node /  available in browser because of dom/window object 

// console.log("jenna"); console.log("ortega") not an error but bad redability
// console.log("jenna") console.log("ortega")  wrong code

let name = "lily"
let age = 19
let isLoggedIn = false
let state = null
let symbolOne = Symbol('description')
let finalOne = undefined
let badaNum = 1234567890123456789012345678901234567890n

/* 

Primitive Datatypes: 

number => 2 to power 53
bigInt => const bigIntValue = 1234567890123456789012345678901234567890n; a number which is too big to store
string => ""
boolean => true, false
null => standalone value
Symbol => 
undefined => const sym = Symbol('description');


Reference Datatypes:
Object


*/

//            FUNFACT!!!!!

// console.log(typeof null) //null is an object, object because most of things in js is object
// console.log(typeof undefined) //object because most of things in js is undefined

