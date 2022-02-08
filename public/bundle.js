"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// constructor function
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

var civic = new Car('honda', 130);
var hb20 = new Car('hyundai', 80);
console.log(civic);
console.log(hb20); //classes

var Cars = /*#__PURE__*/function () {
  function Cars(brand) {
    var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, Cars);

    this.price = price;
    this.brand = brand;
  }

  _createClass(Cars, [{
    key: "run",
    value: function run() {
      console.log('correr');
    }
  }]);

  return Cars;
}();

var civics = new Cars('honda');
console.log(civics.brand);
console.log(civics.price);
civics.run(); // get and set

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this._name = name;
  }

  _createClass(Person, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return Person;
}();

var person = new Person('Luiz Ruiz');
console.log(person.name);
person.name = 'Cunha Augusto';
console.log(person.name); //static methods

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Calculator;
}();

console.log(Calculator.sum(10, 5));

var Persons = /*#__PURE__*/function () {
  function Persons(firstName, secondName) {
    _classCallCheck(this, Persons);

    this.firstName = firstName;
    this.secondName = secondName;
  }

  _createClass(Persons, [{
    key: "fullName",
    get: function get() {
      return Persons.joinNames(this.firstName, this.secondName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(firstName, secondName) {
      return "".concat(firstName, " ").concat(secondName);
    }
  }]);

  return Persons;
}();

var persons = new Persons('Luiz', 'Osmar');
console.log(persons.fullName); //heritage

var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);

    this.rodas = rodas;
  }

  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log('acelerou');
    }
  }]);

  return Veiculo;
}();

var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);

  var _super = _createSuper(Moto);

  function Moto(rodas, capacete) {
    var _this;

    _classCallCheck(this, Moto);

    _this = _super.call(this, rodas); //new Veiculo(2)

    _this.capacete = capacete;
    return _this;
  }

  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("empinou com ".concat(this.rodas, " rodas"));
    }
  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);

      console.log('acelerou muito'); // this overrides the old method
    }
  }, {
    key: "taUsandoCapacete",
    value: function taUsandoCapacete() {
      console.log(this.capacete);
    }
  }]);

  return Moto;
}(Veiculo);

var bross = new Moto(2, true);
bross.empinar();
bross.acelerar();
bross.taUsandoCapacete();
