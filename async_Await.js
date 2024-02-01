// async makes a function return a Promise
// The keyword async before a function makes the function return a promise

// await makes a function wait for a Promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise
// before it continues


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true

// let order = () => {
    
//     return new Promise( (resolve, reject) => {
//         if(){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     } )
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

async function order (){
    try{
        await abc
    }
    catch(error){
        console.log("abc doesn't exist", error)
    }
    finally{
        console.log('Runs code anyways');
    }
}

order()