var Car = require("./Singleton.js");
var CarMaker = require("./Factory.js");

describe("Singleton Test", function () {
    it("test1", function () {
        var car1 = new Car();
        var car2 = new Car();
        car2.width = 100;
        car2.height = 150;
        expect(car1.width).toEqual(car2.width);
        expect(car1.height).toEqual(car2.height);
    });
});

describe("Factory Test", function () {
    it("test1", function () {
        /*
        var carMaker = new CarMaker(),
            car1     = carMaker.factory("Compact"),
            car2     = carMaker.factory("Convertible"),
            car3     = carMaker.factory("SUV");

        expect(car1.doors).toEqual(4);
        expect(car2.doors).toEqual(2);
        expect(car3.doors).toEqual(24);
        */
    });
});
