const score = 400
// console.log(score) //400

const balance = new Number(100)
// console.log(balance) //[Number: 100]

// console.log(balance.toString()) //100
// console.log(typeof balance.toString()) //string
// console.log(balance.toFixed(3)) //100.000

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)) //124
// console.log(otherNumber.toPrecision(4)) //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //1,000,000
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000


// +++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.3)) //4
// console.log(Math.ceil(4.1)) //5
// console.log(Math.floor(4.9)) //4
// console.log(Math.sqrt(2)) //1.4142135623730951
// console.log(Math.pow(5, 2)) //25
// console.log(Math.min(5, 2, 1, 0, 9)) //0
// console.log(Math.max(5, 2, 1, 0, 9)) //9

// console.log(Math.random()) //Generates a random value b/w 0 and 1
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)


//To generate a random number between min and max value
const min = 10
const max = 20

console.log( Math.floor(Math.random() * (max-min+1)) + min )