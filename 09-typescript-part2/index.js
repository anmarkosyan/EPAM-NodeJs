"use strict";
console.log('hello');
var Car = /** @class */ (function () {
    function Car(speed, color, engine) {
        this.speed = speed;
        this.color = color;
        this.engine = engine;
    }
    Car.prototype.getModelOfCar = function () {
        return "Car1: Engine: " + this.engine + "\n Color: " + this.color + "\n Speed: " + this.engine;
    };
    return Car;
}());
var car1 = new Car(34, 'white', 345);
console.log(car1.getModelOfCar());
// class Train implements Transport {}
// class Ship implements Transport {}
