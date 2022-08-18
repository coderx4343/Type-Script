// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Class Inheridance</h1>`;

/*
class Car {
  //field
  engine: string;
  model: number;

  //constructor
  constructor(engine: string,model?: number) {
    this.engine = engine;
    this.model=model;
  }
}

  //function
  class wheel extends Car{
  disp(): void {
    console.log('Engine is  :   ' + this.engine);
    console.log('Model is  :   ' + this.model);
  }
}

var d = new wheel('V8 engine',2019);
d.disp();
console.log(d); */

//Indirect Inheridance
class Root { 
  str:string; 
  branch: string;
  fruit:number;
  constructor(str:string,branch: string,fruit:number){
    this.str=str;
    this.branch=branch;
    this.fruit=fruit;
  }
} 

class Child extends Root {} 
class Leaf extends Child {
  disp(): void {
    console.log("message is "+this.str);
    console.log("Branch is "+this.branch);
    console.log("fruits are "+this.fruit+" in the tree");
  }

}  

var obj = new Leaf("hello","Very big",45); 
obj.disp();
console.log(obj.str)


