//'this' keyword refers to an object that is executing the current piece of code.
// It references the object that is executing the current function.
// const user = {
//    username: "Hitesh",
//    price: 999,
   
//    welcomeMessage: function(){
//     console.log(`${this.username}, Welcome to website!`)
//    }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//Output
// Hitesh, Welcome to website!
// Sam, Welcome to website!


// Case1:
// const user = {
//     username: "Hitesh",
//     price: 999,
    
//     welcomeMessage: function(){
//      console.log(`${this.username}, Welcome to website!`)
//      console.log(this) //outputs the current context
//     }    
//  }
 
//  user.welcomeMessage()
//  user.username = "Sam"
//  user.welcomeMessage()

// console.log(this) //'{}' is the output when the above 3 lines are commented showing empty
//When console.log(this) is used in inspect console the output is "window object" because global object of browser  
//is window object.

//  Output: Case1
// Hitesh, Welcome to website!
// {
//   username: 'Hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Sam, Welcome to website!
// {
//   username: 'Sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


//this in function
//Case1:
// function chai(){
//     console.log(this)
// }

// chai()

//Outputs so many inbuilt values


//Case2:
// function chai(){
//     let username = "Samarth"
//     console.log(this.username)
// }

// chai() //undefined (because context is only working under objects and not just independent function)


//Another way to define the function
// const chai = function () {
//  let username = "Samarth"
//  console.log(this.username)
// }

// chai()


//Arrow functions 
//Structure
// const chai = () => {
//     let username = "Hitesh"
//     console.log(this.username)
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3)) //5


//Implicit return
//It is way of returning a value from a function without explicitly using the return keyword. 
//This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword 
// when the function only has one expression.

// const addTwo = (num1, num2) => num1 + num2
//           OR
// const addTwo = (num1, num2) => (num1 + num2)
// 'return' keyword has to be used in presence of '{}' braces

// console.log(addTwo(4, 3)) //7


//To define an object into implicit function
// const addTwo = (num1, num2) => ({name: "Samarth"})
// console.log(addTwo(1, 4)) //{ name: 'Samarth' }


