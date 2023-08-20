const car = {
    name: null,
    setName: function(name) { this.name = name;},
    getName: function() { return this.name }
};


let vehicle = Object.create(car, {
    brand: {value: "ford"},
    getBrand: {value: function(){ return this.brand } }
} );

vehicle


vehicle.setName("Mustang");

vehicle.getName();

vehicle.getBrand();