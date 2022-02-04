const numbers = [1,2,3,4,5]

numbers.forEach(function (number, index) {
    numbers[index] = number + 1
})

console.log(numbers)


const newNumbers = numbers.map(function(number){
    return number + 1

})

console.log(newNumbers)

const total = numbers.reduce(function (total,next){
    return total + next
})

console.log(total)

// finish propertis with numbers

const todos = [
    { text : 'lavar a louça', done: false},
    { text : 'apanhar lixo', done: true},
    { text : 'dobrar roupa', done: true},
]

const doneTodos = todos.filter(function (todo){
    return todo.done
})

console.log(doneTodos)

const donetodos = todos.filter(function (todo){
    return todo.text === 'dobrar roupa'
})

console.log(donetodos)

//arrow function in line

const doneTodoArrow = todos.filter((todo) => todo.done)

console.log(doneTodoArrow)

const find = todos.find(function (todo) {
    return todo.text === 'dobrar roupa'
})

console.log(find)

const index = todos.findIndex(function(todo) {
    return todo.text === 'apanhar lixo'
})

console.log(index)

// finish propertis with todos

const cars = ['fusca', 'civic', 'hb20']

const hasFusca = cars.some(function (car){
    return car === 'fusca'
})

console.log(hasFusca)

// default value for a function

function sayHello(name = 'fulano'){
    console.log('Olá ' + name )
}

sayHello()

const sayhello = (name = 'fulano') => console.log('Olá ' + name)

sayhello()

// Template string

const showProduct = (product,price) =>{
    console.log('O valor de ' + product + ' é R$ ' + price + ', pode comprar!')
}

showProduct('camisa', 15)

const showproduct = (product,price) =>{
    console.log(`O valor de ${product.toUpperCase()} é R$ ${Math.round(price)}, pode comprar!`)
}

showproduct('camisa', 15.6)

// object short syntax

const nameProduct = 'camisa'
const price = 20

const product = {
    name: nameProduct,
    price, // when the name of an atribute is equal to the variable relative, this type of instance is possible 
    inStock: true
}

console.log(product)


//Destructuring

const fruits = ['laranja', 'morango', 'maca']

const [a, b, c]  = fruits
const [d, , e] = fruits

console.log(a, b, c)
console.log(d, e)

const person = {
    firstName: 'Luiz',
    secondName: 'Osmar',
    age: 23,
    address: { 
        city: 'Manaus',
        region: 'AM'
    }
}

const { firstName, secondName, address: { city } } = person

console.log(firstName, secondName, city)

const showFullName = ({ firstName, secondName}) => {
    console.log(`${person.firstName} ${person.secondName}`)
} 

showFullName(person)

// rest 

const numbers_ = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numbers_

console.log(rest)

const person_ = {
    name_: 'Luiz',
    age: 23,
    height: 1.73,
    company: 'NCR'
}
const { name_, ...resto } = person_

console.log(name_)
console.log(resto)

const sum = (...params) => {
    return params.reduce((total, next) => total + next)
}

console.log(sum(5, 5, 10, 10))

// spread

const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [5, 6, 7, 8, 9, 10]

const numbersSpreaded = [...numbers1, ...numbers2]

console.log(numbersSpreaded)

const personAgain = {
    name_: 'Luiz',
    age: 23,
    height: 1.73,
    company: 'NCR'
}

const person1 = {
    ...person,
    company: 'google'
}

console.log(person1)