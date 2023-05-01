class Account {
    // Declaramos os atributos com a # 
    // na frente para fazer com que eles sejam privados
    #password
    #balance
    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password){
        if (this.#autenticate(email, password)){
            return `Your current balance is ${this.#balance} USD`
        } else {
            return "The email or password you entered is incorrect !"
        }
    }

    #autenticate (email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "isaac@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)

console.log(myAccount.getBalance("isaac@gmail.com", "123456"))
