//ES6
//Class
// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data. 
// Classes in JS are built on prototypes but also have some syntax and semantics that are 
// unique to classes.

// JavaScript Classes are templates for JavaScript Objects.
// Always add a method named constructor():

// Syntax
// class ClassName {
//   constructor() { ... }
// }

//Class Example
// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc` 
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}` 
//     }
// }

// const chai = new User('chai', 'chai@gmail.com', '123')
// console.log(chai.encryptPassword()) //123abc
// console.log(chai.changeUsername())  //CHAI


//Behind the scene
//function Example

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@gmail.com', '123')
const chai = new User('chai', 'chai@gmail.com', '456')

console.log(tea.encryptPassword())
console.log(tea.changeUsername())
console.log(chai.encryptPassword())
console.log(chai.changeUsername())