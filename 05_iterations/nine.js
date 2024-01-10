//reduce
//It is used commonly when shopping cart
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.


//Syntax of reduce method
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


// const arr = [1, 3, 5]
// const sum = arr.reduce( (acc, curr) => {
//     return acc + curr
// }, 0) //0 at the end signifies initial value of accumulator
// console.log(sum);
//Output: 9


// const arr = [1, 3, 5]
// const sum = arr.reduce( (acc, curr) => {
//     console.log(`acc: ${acc} curr: ${curr}`);
//     return acc + curr
// }, 2) //0 at the end signifies initial value of accumulator
// console.log(sum);
//Output
// acc: 2 curr: 1
// acc: 3 curr: 3
// acc: 6 curr: 5
// 11


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay)
//Output: 22996