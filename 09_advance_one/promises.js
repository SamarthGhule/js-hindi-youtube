// Promise
// The promise object represents the eventual completion (or failure) of an asynchronous 
// operation and it's resulting value.


//Method 1
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})


//Method 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 1000)

}).then(function(){
    console.log('Async 2 resolved')
})


//Method 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Chai", email: "chai@example.com"})
    } , 1000) 
})

promiseThree.then(function(user){
    console.log(user)
})


//Method 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        let error = false
        
        if(!error){
            resolve({userName: 'Samarth', password: '123'})
        }
        else{
            reject('ERROR: Something went wrong')
        }

    } ,1000)
})

//Chaining
promiseFour
.then((user) => {
    console.log(user)
    return user.userName
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolved or rejected')
})


//Method 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Method 5_________\n")
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 2000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// fetch Method 1
// async function getAllUsers(){   
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response)
//         const data = await response.json()
//         console.log(data)    
//     } catch (error) {
//         console.log("E: ", error)
//     }   
// }

// getAllUsers()


// fetch Method 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => 
{
    console.log(data)
})
.catch((error) => console.log(error))