//singleton

//object literals (They are not singleton)
//It is a way to declare objects
const mySym = Symbol("key1")

const JsUser = {
    name: "Samarth",
    "full name": "Samarth Ghule",
    [mySym]: "mykey1", //mySym is declared into '[]' as without it, it will be treated as a string.
    age: 18,
    location: "Jaipur",
    email: "samarth@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //samarth@google.com
// console.log(JsUser["email"]) //samarth@google.com
// console.log(JsUser["full name"]) //Samarth Ghule
// console.log(JsUser.mySym) //undefined
// console.log(JsUser[mySym]) //mykey1


//To change the email or overwrite
JsUser.email = "samarth@chatgpt.com"
// console.log(JsUser["email"])

//To lock the value so that further changes cannot be made
// Object.freeze(JsUser)

JsUser["full name"] = "Show"
// console.log(JsUser["full name"]) //Samarth Ghule (Didn't print 'Show' as changes didn't propogate due to freeze)

// console.log(JsUser) //Output below
// {
//     name: 'Samarth',
//     'full name': 'Samarth Ghule',
//     mySym: 'mykey1',
//     age: 18,
//     location: 'Jaipur',
//     email: 'samarth@chatgpt.com',
//     isLoggedIn: 'false',
//     lastLoginDays: [ 'Monday', 'Saturday' ]
//   }

// JsUser.greeting = function(){
//     console.log("Hello JS user")
// }

// console.log(JsUser.greeting()) //Hello JS user

//Function didn't execute and only it's reference is returned
// console.log(JsUser.greeting) //[Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) //this keyword is used for reference of same object
}

console.log(JsUser.greetingTwo()) //Hello JS user, Samarth