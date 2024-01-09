//for of

//Objects are iteratable
//Arrays are iteratable
//Strings are iteratable

// const arr = [1, 2, 3, 4, 5, 6, 7]

// for(const num of arr){
//     console.log(num)
// }

// Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7


// const greetings = "Hello World!"

// for(const greet of greetings){
//     console.log(greet)
// }

//Output
// H
// e
// l
// l
// o
// 
// W
// o
// r
// l
// d
// !


//Map (Map does not work for iterating objects as objects are not iterable)
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

//Output (India is input 2 times but duplicate entries are not output multiple times)
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


// for(const key of map){
//     console.log(key)
// }

//Output
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// for(const [key, value] of map){
//     console.log(key, ' :- ', value);
// }

//Output
// IN  :-  India
// USA  :-  United States of America
// Fr  :-  France


