const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) //includes dc_heros as an element of marvel_heros

// console.log(marvel_heros) //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(dc_heros) //[ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heros[3][2]) //Batman

const allHeros = marvel_heros.concat(dc_heros) //combines 2 or more arrays and returns new array without modifying exixting array
// console.log(allHeros) //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//Spread Operator ...
//Spread syntax expands an array into its elements

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros) //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//Flat method concatenates subarray elements to given depth. Max. depth can be infinity
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(0) //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
// const real_another_array = another_array.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const real_another_array = another_array.flat(2) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// const real_another_array = another_array.flat(Infinity) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// console.log(real_another_array)

// isArray() returns true if an object is array otherwise false
// console.log(Array.isArray(["Hitesh"])) //true
// console.log(Array.isArray("Hitesh")) //false

//Array.from() method returns an array from any object with a length property.
// console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]

//The empty array will be returned in below statement as it cannot convert the given object to array
// console.log(Array.from({name: "Hitesh"})) //[] 

let score1 = 100
let score2 = 200
let score3 = 300

//Array.of() method creates a new array from any number of arguments.
console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]