let name = "billie"

let songsCount = 56
console.log(name)

console.log(name + songsCount + " Songs")
console.log(`${name} has ${songsCount} songs`) // this is called interpolation method to inject values in a string

let anotherWayToDeclareStrings = new String("BATMAN")
console.log(anotherWayToDeclareStrings.toLocaleLowerCase())


console.log(anotherWayToDeclareStrings[0])
console.log(anotherWayToDeclareStrings.__proto__)

console.log(name.length)
console.log(name.toUpperCase())
console.log(anotherWayToDeclareStrings.charAt(4))
console.log(anotherWayToDeclareStrings.indexOf("X"))

let favGame = "last-of-us"
console.log(favGame.substring(1, 6)) // first param is inclusive and second is exclusive
// meaning from it'll include characters from 1st pos to 6th pos but will not include 6th char cuz it is exclusive

const anotherGame = "eldenring"
anotherGame.slice(0, 4)