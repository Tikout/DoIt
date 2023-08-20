var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassUsingProtected = /** @class */ (function () {
    function ClassUsingProtected() {
    }
    ClassUsingProtected.prototype.getId = function () {
        return this.id;
    };
    return ClassUsingProtected;
}());
var deliverFromProtected = /** @class */ (function (_super) {
    __extends(deliverFromProtected, _super);
    function deliverFromProtected() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        return _this;
    }
    return deliverFromProtected;
}(ClassUsingProtected));
var derivedFromProtected = new deliverFromProtected();
derivedFromProtected.id = 1;
console.log("getId returns:  ".concat(derivedFromProtected.getId()));
