class Product {
    // se n for informada a quantidade, será igual a 0
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    removeFromStock(quantity){
        this.inStock -= quantity
    }
}

module.exports = Product