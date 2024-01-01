// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //Number
const scoreValue = 100.3 //Number is number in JS as there is no int, float, decimal, etc special

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 12345678901123340283n



// Reference (Non-primitive)

// Array, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Doga"];
let myObj = {
 name: "Samarth",
 age: 24,
}

const myFunction = function(){
 console.log("Hello World")
}

console.log(typeof heroes)