// const tinderUser = new Object() //Singleton Object
// console.log(tinderUser) //{} is returned as empty object

const tinderUser = {} //Non-singleton object
// console.log(tinderUser) //{} is returned as empty object

tinderUser.id = "123abc"
tinderUser.name = "Samarth"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Samarth",
            lastname: "Ghule"
        }
    }
}

// console.log(regularUser) //Output below
// {
//     email: 'some@gmail.com',
//     fullname: { userfullname: { firstname: 'Samarth', lastname: 'Ghule' } }
//   }
// console.log(regularUser.fullname) //{ userfullname: { firstname: 'Samarth', lastname: 'Ghule' } }
// console.log(regularUser.fullname.userfullname) //{ firstname: 'Samarth', lastname: 'Ghule' }

const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"a", 4:"b" }
const obj4 = { 5:"a", 6:"b" }
// const obj3 = { obj1, obj2 }
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Object.assign() copies all properties from one or more objects to a target object. It returns the modified target object.
//Here target object is obj1
// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3 === obj1) //true

// 2nd method of object assign. {} is optional parameter representing target object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3) 

//Mostly spread operator is used instead of assign()
// const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3)


//Mostly object will be used this way when values are retrieved from database
//The objects will come in form of array of objects
const users = [
    {
       id: 11,
       email: "h1@gmail.com"
    },
    {
       id: 12,
       email: "h2@gmail.com"
    },
    {
       id: 13,
       email: "h3@gmail.com"
    },
]

// console.log(users[0]) //{ id: 11, email: 'h1@gmail.com' }
// console.log(tinderUser) //{ id: '123abc', name: 'Samarth', isLoggedIn: false }

//To return all keys of particular object
// console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ] (The output value datatype is array which can be used to carry out operations like loop, etc.)

//To return all values of particular object
// console.log(Object.values(tinderUser)) //[ '123abc', 'Samarth', false ]

//Object.entries() returns an array consisting of enumerable property [key, value] pairs of the object passed
// console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Samarth' ], [ 'isLoggedIn', false ] ]

//Object.hasOwnProperty("") returns true if object has indicated property as its own property. If the property is inherited, or does not exist, it returns false.
// console.log(tinderUser.hasOwnProperty("isLoggedIn")) //true
// console.log(tinderUser.hasOwnProperty("isLogged")) //false


//Destructuring of objects
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

//Another way to extract object values
// const {courseInstructor} = course
// console.log(courseInstructor) //Hitesh

//Another way to extract object values by giving different name
const {courseInstructor: instructor} = course
console.log(instructor) //Hitesh


//JSON Structure
//APIs can be found in this way (object)
// {
//     "name": "Samarth",
//     "coursename": "JS in Hindi",
//     "price": "Free"
// }

//APIs can also found in array format containing objects
[
 {},
 {}
]

