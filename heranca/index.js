class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
console.log(`someHouse is an instance of House: ${someHouse instanceof House}`) // true 
console.log(`someHouse is an instance of Property: ${someHouse instanceof Property}`) // true

class Apartment extends Property {
    constructor(number, area, price) {
        // this.area = area (GERA ERRO)
        // this.price = price (GERA ERRO)
        super(area, price) // super executa o construtor da classe mãe
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2) // pega toda a string menos os 2 últimos caracteres
    }
}

const apt = new Apartment("201", 100, 160000)

console.log(apt)
console.log(apt.getFloor())
console.log(`apt is an instance of Apartment: ${apt instanceof Apartment}`) // true 
console.log(`apt is an instance of Property: ${apt instanceof Property}`) // true