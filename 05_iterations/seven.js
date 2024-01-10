const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (item) => item + 10 )
// console.log(newNums);
//Output
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]


//Chaining
// It is a programming strategy that simplifies and embellishes your code.
// It is a mechanism for calling a method on another method of the same object.

// const newNums = myNumers.map( (item) => item * 10 ).map( (item) => item + 1 )
// console.log(newNums);
//Output
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]

// const newNums = myNumers.map( (item) => item * 10 ).map( (item) => item + 1 ).filter( (item) => item > 40 )
// console.log(newNums);
// Output
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]