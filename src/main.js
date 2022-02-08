// constructor function

function Car(brand,price){
    this.brand = brand
    this.price = price
}

const civic = new Car('honda', 130)
const hb20 = new Car('hyundai', 80)

console.log(civic)
console.log(hb20)

//classes

class Cars{
    constructor(brand,price = 10){
        this.price = price
        this.brand = brand
    }

    run(){
        console.log('correr')
    }
}

const civics = new Cars('honda')

console.log(civics.brand)
console.log(civics.price)

civics.run()

// get and set

class Person {
    constructor(name) {
        this._name = name
    }

    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }
}

const person = new Person ('Luiz Ruiz')

console.log(person.name)

person.name = 'Cunha Augusto'

console.log(person.name)

//static methods

class Calculator {
    static sum(a, b){
        return a + b
    }
}


console.log(Calculator.sum(10, 5))

class Persons {
    constructor(firstName, secondName){
        this.firstName = firstName
        this.secondName = secondName
    }

    get fullName(){
        return Persons.joinNames(this.firstName, this.secondName)
    }

    static joinNames(firstName, secondName){
        return `${firstName} ${secondName}`
    }
}

const persons = new Persons('Luiz', 'Osmar')

console.log(persons.fullName)

//heritage

class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veiculo{
    constructor(rodas,capacete) {
        super(rodas) //new Veiculo(2)
        this.capacete = capacete
    }
    empinar() { 
        console.log(`empinou com ${this.rodas} rodas`)
    }

    acelerar() {
        super.acelerar()
        console.log('acelerou muito') // this overrides the old method
    }

    taUsandoCapacete() {
        console.log(this.capacete)
    }
}

const bross = new Moto(2, true)

bross.empinar()

bross.acelerar()

bross.taUsandoCapacete()


