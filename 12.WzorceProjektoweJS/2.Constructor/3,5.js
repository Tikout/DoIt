function Car (name) {
    this.name = name;
    this.printInfo = function() {
        console.log(this.name)
    }
}

let car1 = new Car("ford");
let car2 = new Car("dodge");