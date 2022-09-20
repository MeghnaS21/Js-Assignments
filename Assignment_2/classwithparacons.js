//CLASS WITH PARAMETERIZED CONSTRUCTOR TO PASS VALUES
//WHILE CREATING OBJECTS
var employee = /** @class */ (function () {
    //parameterised constructor 
    function employee(employeecode, name) {
        this.employeeCode = employeecode;
        this.employeename = name;
    }
    return employee;
}());
//while object creation we have passed the values
var employeeObj = new employee(216789, "Ayushi");
