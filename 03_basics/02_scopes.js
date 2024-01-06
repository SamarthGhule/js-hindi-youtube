//Case1

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a) //error
// console.log(b) //error
// console.log(c) //30 (Because var declares and changes value irrespective of scope and makes changes globally)


//Case 2
// var c = 300
// let a = 100
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER: ", a) //10
//     c = 30 (another way to declare variable like var)
// }

// console.log(c) //30 (var in if condition makes changes globally irrespective of scope)


//Scope

// console.log(addOne(5)) //6

// // function declaration
// function addOne(num){
//     return num+1
// }

//Another way to declare functions also known as expressions
//As function gets stored in variables (variables are very powerful in javascript)

// addTwo(5) //Error

// const addTwo = function(num){
//     return num+2
// }

// console.log(addTwo(5)) //7

