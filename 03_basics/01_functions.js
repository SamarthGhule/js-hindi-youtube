function sayMyname(){
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("R")
    console.log("T")
    console.log("H")
}

//Function calling
// sayMyname() //Output below
// S
// A
// M
// A
// R
// T
// H

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

// Passed values are arguments e.g. addTwoNumbers(23, 56)
// Recieved values are parameters e.g. function addTwoNumbers(number1, number2)

// addTwoNumbers() //NaN (As arguments are not given)
// addTwoNumbers(23, 56) //79
// addTwoNumbers(23, "56") //2356 (Auto-conversion considering both to be string)
// addTwoNumbers(23, "b") //23b (Auto-conversion considering both to be string)
// addTwoNumbers(23, null) //23
// addTwoNumbers(23, undefined) //NaN
// const result = addTwoNumbers(23, 56) //79
// console.log("Result: ", result) //Result: undefined (console.log in function only prints the value and does not return the value)


// function addingNumbers(number1, number2){
//     // let res = number1 + number2
//     // return res

//     return number1 + number2
// }

// const result = addingNumbers(12, 13)
// console.log("Result: ", result) //Result: 25 (because value is returned in function)

// function loginUserMessage(username){
//     return `${username} just logged in.`
// }

// console.log(loginUserMessage("Samarth")) //Samarth just logged in.
// console.log(loginUserMessage()) //undefined just logged in. (Because argument is not defined)

// function loginUser(username){
 
//     if(username === undefined)
//     {
//      console.log("Please! Enter a username.")
//      return
//     }
//     if(!username) //This condition is equivalent to the above condition
//     {
//      console.log("Please! Enter a username.")
//      return
//     }
//     return `${username} just logged in.`
// }

// console.log(loginUser()) //Please! Enter a username.

// function loginUser(username = "Sam"){ //Default value added
 
//     if(!username) //This condition won't execute due to default value
//     {
//      console.log("Please! Enter a username.")
//      return
//     }
//     return `${username} just logged in.`
// }

// console.log(loginUser()) //Sam just logged in.


//Function with objects
// function calculateCartPrice(num1){
//   return num1
// }

// console.log(calculateCartPrice(200, 400, 500)) //200 (Only 1st parameter is catched)


// ... The three dot operator is called Rest operator and Spread operator based on it's usage
// function calculateCartPrice(...num1){
//       return num1
// }    
// console.log(calculateCartPrice(200, 400, 500)) //[ 200, 400, 500 ]


// function calculateCartPrice(val1, val2, ...num1){
//       return num1
// }    
// console.log(calculateCartPrice(200, 400, 500, 100, 2000)) //[ 500, 100, 2000 ]


//Object as argument
const user = {
    username: 
}