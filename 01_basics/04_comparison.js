// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1) //true
// console.log("02" > 1) //true

// console.log(null>0) //false
// console.log(null==0) //false
// console.log(null>=0) //true
// console.log(null==undefined) //true
// console.log(null===undefined) //false

//The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null>=0 is true and (1) null>0 is false.
 
// The equality check == for undefined and null is defined such that, 
// without any conversions, they equal each other and don't equal anything else.

// Both null and undefined are falsy by default in javascript and null === undefined return false
// As they are of different types

// console.log(undefined>0) //false
// console.log(undefined<0) //false
// console.log(undefined==0) //false
// console.log(undefined>=0) //false
// console.log(undefined<=0) //false

//=== (strict check)
console.log(1=="1") //true due to value conversion
// console.log(1==="1") // false because "===" checks value as well as datatype 
