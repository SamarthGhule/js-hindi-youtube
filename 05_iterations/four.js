const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}


//To print keys via for in loop
// for(const key in myObject){
//     console.log(key);
// }
//Output
// js
// cpp
// rb
// swift


//To print values via for in loop
// for(const key in myObject){
//     console.log(myObject[key]);
// }
//Output
// javascript
// C++
// ruby
// swift by apple


// for(let key in myObject){
//     console.log(`${key} is shortcut for ${myObject[key]}`);
// }
//Output
// js is shortcut for javascript
// cpp is shortcut for C++
// rb is shortcut for ruby
// swift is shortcut for swift by apple


// const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//      console.log(key);
// }
//Output
// 0
// 1
// 2
// 3
// 4


// for (const key in programming) {
//      console.log(programming[key]);
// }
// Output
// js
// rb
// py
// java
// cpp


//Trying for in loop over Map 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//Output
//(Nothing will be printed because map is not iterable)