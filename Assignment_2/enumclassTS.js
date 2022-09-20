//---------ENUMS----IN----CLASSES
var place;
(function (place) {
    place["India"] = "IND";
    place["Australia"] = "AUS";
    place["America"] = "US";
    place["Japan"] = "JPN";
    place["Default"] = "NAN";
})(place || (place = {}));
var User = /** @class */ (function () {
    function User(fullname, userAge, userAddress) {
        this.address = place.Default;
        this.name = fullname;
        this.age = userAge;
        this.address = userAddress;
    }
    return User;
}());
var Obj1 = new User("Juli", 18, place.America);
var Obj2 = new User("Tom", 15, place.Australia);
console.log(Obj1.address);
