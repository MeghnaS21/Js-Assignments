//------M E T H O D S-------

class Geometry{

    public AddNumber(a:number, b:number){
        return a+b; //no need to create a new memory
    }

    // public AddNumber(a:number, b:number){
          /*METHOD OVERRIDING IS NOT POSSIBLE IN TYPESCRIPT*/
    // }

    public multiplyNumber(a:number, b:number):void{
        return;
    }

    public subtarctNumber(a:number, b:number){
        
    }
}

let geObj:Geometry = new Geometry();
let result:number=geObj.AddNumber(2,3);
