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

