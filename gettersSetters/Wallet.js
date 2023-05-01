class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 // 10099
    }

    get Amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('username must be of type string')
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.Amount)

myWallet.username = "Isaac"
console.log(myWallet.username)

myWallet.username += " Pontes"
console.log(myWallet.username)

myWallet.username = 52090 // ERRO
console.log(myWallet.username)
