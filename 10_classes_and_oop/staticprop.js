//Static properties
// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const Samarth = new User("Samarth") //Username: Samarth
// console.log(Samarth.createId()) //Error(due to static)
Samarth.logMe()

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
iphone.logMe() //Username: iphone
// console.log(iphone.createId())