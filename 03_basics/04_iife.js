//Immediately Invoked Function Expression (IIFE)

// An IIFE is a JavaScript function that runs as soon as it is defined.
// Avoid polluting the global namespace
// A program could include many functions and global variables from different source files, 
// it's important to limit the number of global variables. 
// If we have some initiation code that we don't need to use again, we could use the IIFE pattern.

//named IIFE
// (function chai(){
//     console.log(`DB CONNECTED`)
// })();

// First () is for function definition
// Second () is for execution call


//Another way to declare
//unnamed IIFE
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()


// ( (name) => {
//     console.log(`Name: ${name}`)
// })("Samarth")

//"Samarth" is argument and 'name' is parameter