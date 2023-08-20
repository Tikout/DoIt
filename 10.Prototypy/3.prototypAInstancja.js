function Car(name) {
    this.name = name;
}
Car.prototype.brand = "ford";
let ford = new Car("Mustang");

ford.brand

Car.prototype = { weight: 2000 };

ford.brand

ford.weight

let pontiac = new Car("pontiac");

pontiac.weight

pontiac.brand

pontiac

ford.__proto__ === pontiac.__proto__

ford.constructor

Car.prototype.constructor

Car.prototype.constructor = Car;

pontiac.constructor