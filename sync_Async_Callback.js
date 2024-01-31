//Synchronous
// Synchronous means to be in a sequence, i.e. every statement of the code gets executed 
// one by one. 
// So, basically a statement has to wait for the earlier statement to get executed.

// console.log("I");
// console.log("eat");
// console.log("ice cream");
// console.log("with");
// console.log("a spoon\n");


//Asynchronous
// Asynchronous code allows the program to be executed immediately whereas 
// the synchronous code will block further execution of the remaining code until 
// it finishes the current one.

// console.log("I");
// console.log("eat");

// setTimeout(() => {
//     console.log("ice cream");
// }, 4000)

// console.log("with");
// console.log("a spoon");


//Callback
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

//Example 1
// function one(call_two){
//     call_two()
//     console.log("Function one complete")
// }

// function two(){
//     console.log("Function two complete")
// }

// one(two)


//Example 2
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let order = (Fruit_name, call_production) => {
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
        call_production()
    }, 2000);

}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log('The fruit has been chopped');

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
            
                setTimeout(() => {
                    console.log('The machine was started');

                    setTimeout(() => {
                       console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                       
                       setTimeout(() => {
                          console.log(`${stocks.toppings[0]} was added as toppings`);

                          setTimeout(() => {
                             console.log('Serve Ice-cream');
                          }, 2000);
                       }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}

order(2, production)

// Callback hell is a phenomenon where a Callback is called inside another Callback. 
// It is the nesting of multiple Callbacks inside a function. 
// If you look at the design of the code, it seems just like a pyramid. 
// Thus the Callback hell is also referred to as the 'Pyramid of Doom'.