function Thing (name) {
    this.name = name;
}

Thing.prototype.weight = 4;
let tv = new Thing("Tv");
let telephone = new Thing("Phone");


Thing.prototype.price = 100;
Thing.prototype.weight = 50;
Thing.prototype.printInfo = function() {
    console.log(this.name, this.weight, this.price);
}

tv.weight

telephone.weight

Thing.prototype.printWeight = function() { console.log(this.weight) }

tv.printWeight();

telephone.printWeight();

tv.weight = 10;

tv.printWeight();

tv

tv.price

telephone.price

tv.weight

telephone.printInfo();

tv.printInfo();

tv

tv.Thing

tv.constructor.prototype