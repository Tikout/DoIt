// Classes
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass has id: ".concat(this.id));
    };
    return SimpleClass;
}());
// THIS Keyword
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 12312313;
mySimpleClass.print();
