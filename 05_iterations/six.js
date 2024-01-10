const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);
//Output
// js
// ruby
// java
// python
// cpp
// undefined (undefined signifies that nothing is returned)


// const values = coding.forEach( (item) => {
//     return item
// } )

// console.log(values)
//Output
//undefined (forEach doesn't return anything)


// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => { num > 4 } )
// console.log(newNums) //[] (Empty array is returned because whenever new scope {} is made then return keyword is necessary)

// const newNums = myNums.filter( (num) => { return num > 4 } )
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ] (scope {} and return both are present)


//forEach in array usage
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


//Books example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 1989}
]

//Filter books whose genre is 'History'
// const userBooks = books.filter( (item) => item.genre === 'History' )
// console.log(userBooks);
//Output
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]


//Filter books published after 2000
// const myNums = books.filter( (item) => { return item.publish > 2000 } )
// console.log(myNums)
//Output
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]


//Filter books on multiple conditions
const myNums = books.filter( (item) => { return item.publish > 1995 && item.genre === 'History' } )
console.log(myNums)
//Output
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]