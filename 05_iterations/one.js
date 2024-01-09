// for

// for(let i=0; i<10; i++){
//     console.log(i)
// }


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }

//Javascript does not have out of bounds exception but undefined in itself is a problematic thing


//Break

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if(element==5)
//     {
//      console.log(`Detected 5`)
//      break
//     }

//     console.log(`Value of i is ${i}`)
// }

//Continue

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(element==5)
    {
     console.log(`Detected 5`)
     continue
    }

    console.log(`Value of i is ${i}`)
}