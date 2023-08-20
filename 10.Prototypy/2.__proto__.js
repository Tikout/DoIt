function Car(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
}

Car.prototype.weight = 2000;

Car.prototype.printInfo() ;{console.log (this.name, this.price, this.year, this.weight);
};

let ford = new Car("ford", 12500, 2013);
let volks = new Car("volks", 13200, 2011);

ford.price

volks.price

ford.weight

volks.weight

ford.printInfo();

volks.printInfo();

for (const prop in ford) {
    if (ford.hasOwnProperty(prop)) console.log(prop); // tylko to co w instancji obiektu
}

ford