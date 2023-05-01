class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(email === this.email && password === this.password){
            console.log("You are successfully logged in !")
        } else {
            console.log("Invalid username or password.")
        }
    }
}

const john = new User("John Ferreira", "johnferreira123@gmail.com", "123abc")

john.login("johnferreira123@gmail.com", "abc123") // Wrong Password
john.login("johnferreira123@gmail.com", "123abc")

console.log(john)