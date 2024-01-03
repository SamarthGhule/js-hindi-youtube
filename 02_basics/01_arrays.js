// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[3]) //4

// myArr.push(6) //pushes 6 from back
// myArr.push(7) 
// myArr.pop() //removes from back
// console.log(myArr)

//insert a value at the start
// myArr.unshift(9)
// console.log(myArr)

//removes an element from front
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3)) //true
// console.log(myArr.indexOf(6)) //-1 is output due to absence of 6th index

const newArr = myArr.join() //Adds all elements of array to string

// console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr) //0,1,2,3,4,5

const myn1 = myArr.slice(1, 3) //Return copy of section of array, end index not included

console.log(myn1) //[ 1, 2 ]
console.log("B ", myArr) //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3) //Removes elements from original array and returns the removed elements

console.log("C ", myArr) //C  [ 0, 4, 5 ]
console.log(myn2) //[ 1, 2, 3 ]