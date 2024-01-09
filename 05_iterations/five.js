//Higher order array loops

const coding = ["js", "ruby", "java", "python", "cpp"]

// A callback is a function passed as an argument to another function
// coding.forEach( function(val){
//     console.log(val);
// } )
//Output
// js
// ruby
// java
// python
// cpp


//using Arrow function
// coding.forEach( (val) => {
//    console.log(val);
// } )
//Output
// js
// ruby
// java
// python
// cpp


//Another way to pass function as parameter
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
//Output
// js
// ruby
// java
// python
// cpp


//forEach has other access too... like index and array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )
//Output
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


//Accessing array of objects via higher order functions
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )