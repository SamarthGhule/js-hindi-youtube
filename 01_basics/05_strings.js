const name = "Samarth"
const repoCount = 50

// Old way of writing 
// console.log("Name = " + name + " repoCount = " + repoCount)

//Modern way of writing (known as String Interpolation)
//More readable and reliable

// console.log(`Hello! My name is ${name} and My repo count is ${repoCount}`)

const gameName = new String('Samarth-28')

// console.log(gameName[0])
// console.log(gameName.__proto__)//__proto__ is a method that exposes the hidden [[Prototype]] property and allows you to modify it.


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('8'))

const newString = gameName.substring(0, 4)
// console.log(newString) //Sama
// const anotherString = gameName.slice(0, 4) //Sama
const anotherString = gameName.slice(-9, 4)
// console.log(anotherString)//ama

//trim works on spaces as well as line terminator
const newStringOne = "           Samarth        Ghule"
// console.log(newStringOne)
// console.log(newStringOne.trimStart())//removes only starting spaces
// console.log(newStringOne.trimEnd())//removes only end spaces
// console.log(newStringOne.trim())//removes start and end spaces


//Browser does not understand spaces if space is detected in url then brwser automatically converts it into %20

const url = "https://samarth.com/samarth%20ghule"

// console.log(url.replace('%20', '-'))//https://samarth.com/samarth-ghule

// console.log(url.includes('samarth.com'))//true
// console.log(url.includes('samarthcom'))//false

const str = new String("Samarth-Ghule-3.0")

// console.log(str.split('-'))//[ 'Samarth', 'Ghule', '3.0' ]
console.log(str.blink())//