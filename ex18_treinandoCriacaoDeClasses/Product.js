class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(percentage) {
        return this.price * ((100 - percentage) / 100)
    }
}

const mouseRazer = new Product("Razer Deathadder Esssential", "Mouse Razer Deathadder Esssential", 200)

mouseRazer.addToStock(10)

console.log(mouseRazer)
const priceWithDiscount = mouseRazer.calculateDiscount(20)
console.log(`${mouseRazer.name} with 20% discount is ${priceWithDiscount}`)
console.log(mouseRazer)