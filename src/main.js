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