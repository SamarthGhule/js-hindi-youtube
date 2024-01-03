//Dates

let myDate = new Date()
// console.log(myDate) //2024-01-02T14:38:55.996Z
// console.log(myDate.toString()) //2024-01-02T14:38:55.996Z Tue Jan 02 2024 14:38:55 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Tue Jan 02 2024
// console.log(myDate.toLocaleString()) //1/2/2024, 2:38:55 PM
// console.log(typeof myDate) //object

// let myCreateDate = new Date(2024, 0, 2)
// console.log(myCreateDate.toDateString()) //Tue Jan 02 2024

// let myCreateDate = new Date(2024, 0, 2, 5, 3)
// console.log(myCreateDate.toLocaleString()) //1/2/2024, 5:03:00 AM

// let myCreateDate = new Date("2024-1-14")
// console.log(myCreateDate.toLocaleString()) //1/14/2024, 12:00:00 AM

// let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDate.toLocaleString()) //1/14/2024, 12:00:00 AM


//Time Stamp for Quizzes/ Polls
let myTimeStamp = Date.now() //Gives time in milliseconds from 1 Jan 1970
// console.log(myTimeStamp)

let myCreateDate = new Date("01-14-2024") //Gives time in milliseconds from 1 Jan 1970 to 01-14-2024
// console.log(myCreateDate.getTime()) 

//Gives time in seconds from 1 Jan 1970
// console.log(Math.floor(myTimeStamp/1000))


let newDate = new Date()
// console.log(newDate)

//Indexing of Months start from 0 (0 = January...)
// console.log(newDate.getMonth()) //0

//Indexing of Days start from 1 (Monday = 1) 
// console.log(newDate.getDay()) //3

//Used in real world as below
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})

