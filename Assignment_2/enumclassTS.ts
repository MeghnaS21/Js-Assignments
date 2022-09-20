//---------ENUMS----IN----CLASSES

enum place{
    India="IND" , 
    Australia="AUS" ,
    America="US" , 
    Japan="JPN" , 
    Default = "NAN"
}
class User{
    //default public 
    name:string;
    age:number;
    address:string=place.Default;
   
    constructor (fullname:string , userAge:number , userAddress:string ){
        this.name = fullname;
        this.age = userAge;
        this.address = userAddress;
    }
}
 
const Obj1 = new User("Juli",18,place.America);
const Obj2 = new User("Tom",15,place.Australia);
console.log(Obj1.address)