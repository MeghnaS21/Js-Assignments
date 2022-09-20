//---------P R O C T E C T E D---------
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
/* The protected access modifier is similar to the private
access modifier, except that protected members
 can be accessed using their deriving classes.*/
var WORKER = /** @class */ (function () {
    function WORKER(name, code) {
        this.WORKERname = name;
        this.WORKERcode = code;
    }
    return WORKER;
}());
//child class ---INHERITANCE using EXTEND keyword
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        return _this;
    }
    return SalesEmployee;
}(WORKER));
var workerObj = new WORKER("Ayushi Mishra", 6789);
//workerObj.WORKERcode; //error because this attribute is protected in parent class
