// console.log(2>1) // true
// console.log(3>5) // false
// console.log(2>=2) // true
// console.log( 2 == 1) //false
// console.log( 2 != 1) //true


// console.log("2" > 1) // true , because of type coercion 
// console.log("02" > 1) // true
// console.log("0" > 1) // false

// console.log(null > 0) // false, because of type coercion
// console.log(null == 0) // false 
// console.log(null >= 0) // true
// console.log(null < 0) // false



//  === do strict check , meaning it will also check it's data types
console.log("2" === 2) // false
console.log("2" == 2) // true