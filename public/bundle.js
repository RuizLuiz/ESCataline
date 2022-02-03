"use strict";

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index) {
  numbers[index] = number + 1;
});
console.log(numbers);
var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers);
var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total); // finish propertis with numbers

var todos = [{
  text: 'lavar a louça',
  done: false
}, {
  text: 'apanhar lixo',
  done: true
}, {
  text: 'dobrar roupa',
  done: true
}];
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos);
var donetodos = todos.filter(function (todo) {
  return todo.text === 'dobrar roupa';
});
console.log(donetodos); //arrow function in line

var doneTodoArrow = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodoArrow);
var find = todos.find(function (todo) {
  return todo.text === 'dobrar roupa';
});
console.log(find);
var index = todos.findIndex(function (todo) {
  return todo.text === 'apanhar lixo';
});
console.log(index); // finish propertis with todos

var cars = ['fusca', 'civic', 'hb20'];
var hasFusca = cars.some(function (car) {
  return car === 'fusca';
});
console.log(hasFusca); // default value for a function

function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fulano';
  console.log('Olá ' + name);
}

sayHello();

var sayhello = function sayhello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fulano';
  return console.log('Olá ' + name);
};

sayhello(); // Template string

var showProduct = function showProduct(product, price) {
  console.log('O valor de ' + product + ' é R$ ' + price + ', pode comprar!');
};

showProduct('camisa', 15);

var showproduct = function showproduct(product, price) {
  console.log("O valor de ".concat(product.toUpperCase(), " \xE9 R$ ").concat(Math.round(price), ", pode comprar!"));
};

showproduct('camisa', 15.6); // object short syntax

var nameProduct = 'camisa';
var price = 20;
var product = {
  name: nameProduct,
  price: price,
  // when the name of an atribute is equal to the variable relative, this type of instance is possible 
  inStock: true
};
console.log(product);
