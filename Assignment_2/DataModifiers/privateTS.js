//------P R I V A T E------
//The private access modifier ensures thatc
//class members are visible only to that class and are not 
//accessible outside the containing class.
var worKer = /** @class */ (function () {
    function worKer() {
    }
    return worKer;
}());
var workerOBJ = new worKer();
//workerOBJ.workerCode=123; //error because this attribute is private 
workerOBJ.workerName = "Ayushi";
