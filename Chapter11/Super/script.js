class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        super(); // To invoke parent class constr
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Solve problems, build something");
    }
}

let sujataObj = new Engineer("Chemical Eng");
console.log(sujataObj);
sujataObj.work();
