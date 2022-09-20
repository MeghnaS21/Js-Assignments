//CLASS WITH PARAMETERIZED CONSTRUCTOR TO PASS VALUES
//WHILE CREATING OBJECTS

class employee{
    employeeCode: number;
    employeename: string;

    //parameterised constructor 
    constructor(employeecode: number, name: string){
        this.employeeCode=employeecode;
        this.employeename=name;
    }
}

//while object creation we have passed the values
let employeeObj = new employee(216789,"Ayushi");