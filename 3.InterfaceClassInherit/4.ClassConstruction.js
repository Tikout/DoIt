var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    ClassWithConstructor.prototype.getName = function () {
        return this.name;
    };
    ClassWithConstructor.prototype.getId = function () {
        return this.id;
    };
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(10, "sadasd");
console.log(classWithConstructor.getName());
console.log(classWithConstructor.getId());
