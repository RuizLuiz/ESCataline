"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
console.log(product); //Destructuring

var fruits = ['laranja', 'morango', 'maca'];
var a = fruits[0],
    b = fruits[1],
    c = fruits[2];
var d = fruits[0],
    e = fruits[2];
console.log(a, b, c);
console.log(d, e);
var person = {
  firstName: 'Luiz',
  secondName: 'Osmar',
  age: 23,
  address: {
    city: 'Manaus',
    region: 'AM'
  }
};
var firstName = person.firstName,
    secondName = person.secondName,
    city = person.address.city;
console.log(firstName, secondName, city);

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      secondName = _ref.secondName;
  console.log("".concat(person.firstName, " ").concat(person.secondName));
};

showFullName(person); // rest 

var numbers_ = [1, 2, 3, 4, 5];
var first = numbers_[0],
    second = numbers_[1],
    rest = numbers_.slice(2);
console.log(rest);
var person_ = {
  name_: 'Luiz',
  age: 23,
  height: 1.73,
  company: 'NCR'
};

var name_ = person_.name_,
    resto = _objectWithoutProperties(person_, ["name_"]);

console.log(name_);
console.log(resto);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sum(5, 5, 10, 10)); // spread

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [5, 6, 7, 8, 9, 10];
var numbersSpreaded = [].concat(numbers1, numbers2);
console.log(numbersSpreaded);
var personAgain = {
  name_: 'Luiz',
  age: 23,
  height: 1.73,
  company: 'NCR'
};

var person1 = _objectSpread(_objectSpread({}, person), {}, {
  company: 'google'
});

console.log(person1);
