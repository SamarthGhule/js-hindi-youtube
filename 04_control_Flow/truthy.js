// const userEmail = "S@samarth.ai" //Got user email
// const userEmail = "" //Don't have user email
// const userEmail = [] //Got user email

// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email")
// }


//falsy values (Values that are assumed as false)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values (Values that are considered as true)
// "0", "false", " ", [], {}, function(){}


//Checking array
// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


//Check if object is empty
// const emptyObj = {} //Object is empty

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }



//Points to rember for == (not ===)
// false == 0 //true
// false == '' //true
// 0 == '' //true


//Nullish Coalescing operator (??)
//It is an alternative to || which returns the right-side expression if the left-side is null or undefined.

// let val1
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
// val1 = null ?? 10 ?? 20 //10
// val1 = 0 ?? 10 ?? 20 //0
// val1 = "" ?? 10 ?? 20 //  (Nothing)
// val1 = false ?? 10 ?? 20 //false

// console.log(val1)


//Ternary Operator
// const iceTeaPrice = 100 //More than 80
// const iceTeaPrice = 80 //Less than 80

// iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")