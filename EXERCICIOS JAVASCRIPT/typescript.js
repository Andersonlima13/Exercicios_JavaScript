var car = /** @class */ (function () {
    function car(model, doorsquantity) {
        this.speed = 0;
        this.model = model;
        this.doorsquantity = doorsquantity;
    }
    car.prototype.increaseSpeed = function () {
        this.speed = this.speed + 10;
    };
    car.prototype.stop = function () {
        this.speed = 0;
    };
    return car;
}());
var palio = new car('palio', 4);
console.log(palio);
