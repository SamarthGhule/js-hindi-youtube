// call() method
// The call() method is a predefined JavaScript method.
// The call() method enables to write a method that can be used on different objects.
// With call(), an object can use a method belonging to another object.
// It can be used to invoke (call) a method with an owner object as an argument.


//Example
// function SetUsername(username) {
//     //complex DB calls
//     this.username = username
// }

// function createUser(username, email, password) {
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai) //createUser { email: 'chai@fb.com', password: '123' }
//(name is not shown as SetUsername is not holding username reference)


//Example rectified
function SetUsername(username) {
    //complex DB calls
    this.username = username
}

// When you use call with a function, you are essentially setting the this value for that function. 
// This is particularly useful when you want to borrow methods from one object and use them 
// for another, or when you want to explicitly set the context in which the function 
// should execute.

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai) //createUser { username: 'chai', email: 'chai@fb.com', password: '123' }