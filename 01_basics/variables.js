const accountId = 1445534
let ccountEmail = 12
var accountPassword = "123456"
let accountState;

accountCity = "Istanbul" //if not named variable then it will act as var variable

// accountId = 2 // Not Allowd, Constant cannot be changed
// console.log(accountId)

accountEmail = "vikas@vikas.com"
accountPassword = "mixpanel" + 1
accountCity = "lasVegas"

console.table([accountId, accountPassword, accountCity])


/*

var is function-scoped, meaning its visibility extends across the entire function, including any nested blocks.
let is block-scoped, meaning its visibility is confined to the block (e.g., within {}) where it is declared.


*/

// console.log(mixpanel) // they are also hoisted to the top but not initialized with undefined unlike like "var" Cannot access 'mixpanel' before initialization
// let mixpanel = 12 

console.log(airbnb) // gives undefined, because Variables declared with var are hoisted to the top of their function or global scope,
//  meaning they are available before the actual declaration in the code, but their value is undefined until the declaration is encountered.
var airbnb = 13 


function bulb(){
    var elkos = "99w"
    console.log(elkos)
}

bulb()

// console.log(elkos) // says not defined  cuz var is functional scoped and if outside a function it is global scoped

let bosch = "750w"

function mixer(){
    console.log(bosch)
}

mixer()