// JavaScript, getter methods are used to access the properties of an object.
// JavaScript, setter methods are used to change the values of an object.


class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const samarth = new User("s@samarth.com", '123')

console.log(samarth) //User { _email: 's@samarth.com', _password: '123' }
console.log(samarth.email) //S@SAMARTH.COM
console.log(samarth.password) //123