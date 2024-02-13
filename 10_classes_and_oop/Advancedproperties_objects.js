// Advanced Properties of objects in JS

// Object.getOwnPropertyDescriptor()
// The Object.getOwnPropertyDescriptor() static method returns an object describing the 
// configuration of a specific property on a given object.
// The object returned is mutable but mutating it has no effect on the original property's 
// configuration.

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)


//Example 1
// const chai = {
//     name: 'Ginger Chai',
//     price: 250,
//     isAvailable: true,
// }

// console.log(chai)//{ name: 'Ginger Chai', price: 250, isAvailable: true }

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
//Output
// {
//   value: 'Ginger Chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }



//Example 2

const chai = {
    name: 'Ginger Chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("Chai nhi bni")
    }
}

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

//Output
// name : Ginger Chai
// price : 250
// isAvailable : true