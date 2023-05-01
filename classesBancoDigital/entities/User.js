const Account = require("./Account")

class User {
    constructor(email, fullname){
        this.email = email
        this.fullname = fullname
        this.account = new Account(this) // Está passando a própria instância de usuário
    }
}

module.exports = User