// Object Literal is a data type used to define objects in JavaScript. 
// It is a syntax for creating an object in JavaScript that is composed of key-value pairs.
// They are used to store collections of data, and can be used to represent 
// complex data structures such as objects, arrays, functions, and even regular expressions.

// `this` keyword
// In JavaScript, the this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        // console.log(this)
        //(Output of this)
        // {
        //     username: 'hitesh',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) //{}

function User(username, loginCount, isLoggedIn) {
    this.username = username //this.username means 'username' is a variable
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this //As it gets defined implicitly so not mandatory to define it
}

// new keyword is used to create an instance of an object 
// that has a constructor function.
// On calling the constructor function with the ‘new’ operator, new empty object is created.

const userOne = new User("Samarth", 12, true)
const userTwo = new User("Ghule", 11, false)
// console.log(userOne)
// console.log(userTwo)

// The constructor method is a special method of a class for creating and 
// initializing an object instance of that class.
// The constructor property returns the function that created the Object prototype.

console.log(userOne.constructor) //[Function: User]

// The instanceof operator returns true if an object is an instance of a specified object
console.log(userOne instanceof Object) //true
console.log(userOne instanceof Number) //false
console.log(userOne instanceof Array) //false
console.log(userOne instanceof User) //true