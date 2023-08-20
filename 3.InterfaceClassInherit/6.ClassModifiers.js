var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty() {
    }
    ClassWithPrivateProperty.printData = function () {
        console.log(this._hobby);
    };
    Object.defineProperty(ClassWithPrivateProperty.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassWithPrivateProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ClassWithPrivateProperty._hobby = "This is a static property";
    return ClassWithPrivateProperty;
}());
var classWithPrivate = new ClassWithPrivateProperty();
classWithPrivate.name = "Jacek";
console.log(classWithPrivate.name);
//ClassWithPrivateProperty._hobby = "Playing video games";
//console.log(ClassWithPrivateProperty._hobby);
ClassWithPrivateProperty.printData();
