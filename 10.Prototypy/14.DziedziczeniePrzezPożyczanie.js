function Machine (name, vendor) {
    this.name = name; this.vendor = vendor;
    this.printInfo = function( ) { console.log(this.name, this.vendor)};
}

Machine.prototype.getVendor = function() {return this.vendor};

function Vehicle(name, vendor, type, numWheels) {
    Machine.apply(this, [name, vendor]);
    this.type = type; this.numWheels = numWheels;
}


Vehicle.prototype = new Machine();  // Robimy to dlatego żeby interpreter 
                                    // JS mógł znaleźć funkcję get vendor
                                    // ale tracimy info o konstruktorze Vehicle

Vehicle.prototype.constructor = Vehicle; // Tak to możemy naprawić
let car = new Vehicle("mustang", "ford", "car", 4);

car.getVendor

car.printInfo

function Truck(name, vendor, type, numWheels, cargoType, weight) {
    Vehicle.call(this, name, vendor, type, numWheels);
    this.cargoType; this.weight = weight; 
}

let Truck = new Truck("fmx", "Volvo", "Truck", 6, "fuel", 10000);


Truck.printInfo();