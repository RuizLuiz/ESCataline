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


