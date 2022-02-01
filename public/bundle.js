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
console.log(donetodos);
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
console.log(hasFusca);
