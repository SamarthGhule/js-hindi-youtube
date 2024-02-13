//Inheritance
// Inheritance refers to passing down characteristics from a parent to a child so that 
// a new piece of code can reuse and build upon the features of an existing one. 
// JavaScript implements inheritance by using objects. 
// Each object has an internal link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached 
// with null as its prototype.

// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

// The super keyword is used to call the constructor of its parent class 
// to access the parent's properties and methods.


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    adCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}


const chai = new Teacher('chai', 'chai@teacher.com', '123')
chai.adCourse()

const masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai === masalaChai) //false
console.log(chai instanceof Teacher) //true