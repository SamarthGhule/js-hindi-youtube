//   STRUCTURE OF PROMISE

//     A Promise is made
//            ||
//          Pending
//            /\
//           /  \
//          /    \
//         /      \
//        /        \
//       /          \
//  Resolve         Reject
//      |            |
//   .then           |
//      |            |
//   .then          .catch
//       \          /
//        \        /
//         \      /
//          \    /
//           \  /
//            \/
//         .finally

// The Promise object represents the eventual completion (or failure) of an asynchronous 
// operation and its resulting value.
// A Promise is an object that will produce a single value some time in the future. 
// If the promise is successful, it will produce a resolved value, but if something goes 
// wrong then it will produce a reason why the promise failed.

// We need to understand 4 more things first:
// -> Relationship b/w time and work
// -> Promise chaining
// -> Error handling
// -> The .finally handler


// -> Relationship b/w time and work and
// -> Promise chaining
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

// Promises are useful when you have to handle more than one asynchronous task, 
// one after another. 
// For that, we use promise chaining. 
// You can perform an operation after a promise is resolved using methods then() , 
// catch() and finally() .

let is_shop_open = true

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open){
            setTimeout(() => {
                resolve(work())
            }, time);
        } else{
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

.then( () => {
    return order(0, () => console.log('Production has started')) 
})

.then( () => {
    return order(2000, () => console.log('The fruit was chopped')) 
})

.then( () => {
    return order(1000, () => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
} )

.then( () => {
    return order(1000, () => console.log('Start the machine'))
} )

.then( () => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[0]}`))
} )

.then( () => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected`))
} )

.then( () => {
    return order(1000, () => console.log('Ice cream was served'))
} )



// -> Errors inside the Promises
//    If you throw an error inside the promise, the catch() method will catch it, 
//    not the try/catch. If you chain promises, 
//    the catch() method will catch errors that occur in any promise.

.catch(() => {
        console.log("Customer left")
})


// The finally() method is used to return a Promise, when a promise is settled, 
// Like then() and catch(), that is either fulfilled or rejected.

.finally(() => {
    console.log('Day ended, shop is closed');
})

