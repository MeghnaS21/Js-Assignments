//---------P R O C T E C T E D---------

/* The protected access modifier is similar to the private 
access modifier, except that protected members
 can be accessed using their deriving classes.*/

class WORKER{
    public WORKERname: string;
    protected WORKERcode: number;

    constructor(name: string, code: number){
        this.WORKERname=name;
        this.WORKERcode=code;
    }

}

//child class ---INHERITANCE using EXTEND keyword

class SalesEmployee extends WORKER{
    private department: string;

    constructor(name: string, code: number, department: string){
        super(name, code);
        this.department = department; 
    }
}

let workerObj = new WORKER("Ayushi Mishra", 6789);
//workerObj.WORKERcode; //error because this attribute is protected in parent class