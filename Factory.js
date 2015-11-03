/**
 * Created by tay81084 on 15/11/3.
 */

var CarMaker = function(){};

CarMaker.prototype.dirve = function(){
    return "I have" + this.door + "doors";
};

CarMaker.factory = function(type){
    var cr = type,
        newcar;

    if(typeof CarMaker[cr] !== "function"){
        throw{
            name:"Error",
            Message: cr + "does not exist"
        };
    }

    if(typeof CarMaker[cr].prototype.drive !== "function"){
        CarMaker[cr].prototype = new CarMaker();
    }

    newcar = new CarMaker[cr]();
    return newcar;
}

CarMaker.Compact = function(){
    this.doors = 4;
}

CarMaker.Convertible = function(){
    this.doors = 2;
}

CarMaker.SUV = function(){
    this.doors = 24;
}
module.exports = CarMaker;
