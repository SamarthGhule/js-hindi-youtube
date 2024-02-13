let myName = 'Samarth     '

// console.log(myName.length) //12
// console.log(myName.trim().length) //7

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

//Factory Function Path
// Function---|\
// Array -----| >-->Object----> NULL
// String ----|/


//Example 1
// Object.prototype.Samarth = function () {
//     console.log('Samarth is present in all objects')
// }

// heroPower.Samarth() //Samarth is present in all objects
// myHeros.Samarth() //Samarth is present in all objects

//Example 2
// Array.prototype.Samarth = function () {
//     console.log('Samarth is present in all objects')
// }

// heroPower.Samarth() //(Error)
// myHeros.Samarth() //Samarth is present in all objects


//Inheritance
// Inheritance refers to passing down characteristics from a parent to a child so that 
// a new piece of code can reuse and build upon the features of an existing one. 
// JavaScript implements inheritance by using objects. 
// Each object has an internal link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached 
// with null as its prototype.

// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//Modern syntax
//TeachingSupport accessing the property of teacher
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode'

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
'Samarth'.trueLength()
'iceTea'.trueLength()