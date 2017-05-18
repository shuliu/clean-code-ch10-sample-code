var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(theName) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.name = theName;
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name) || this;
    }
    return Bird;
}(Animal));
var aDog = new Dog('汪醬');
var aCat = new Cat('老大');
var aBird = new Bird('啾揪');
console.log(aDog.getName());
console.log(aCat.getName());
console.log(aBird.getName());
