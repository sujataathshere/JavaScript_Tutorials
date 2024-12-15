class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

let personObj = new Person();
console.log(personObj);
personObj.work();

class Engineer extends Person{
    work(){
        console.log("Solve problems, build something");
    }
}
class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let sujataObj = new Engineer();
console.log(sujataObj);
sujataObj.work();

let sanketObj = new Doctor();
console.log(sanketObj);
sanketObj.work();