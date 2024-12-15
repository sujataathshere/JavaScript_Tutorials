let DATA = "Secret Information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ",DATA);
    }
}
let student1 = new User("Sujata", "sujata@email.com");
let student2 = new User("Devi", "devi@email.com");
console.log(student1.viewData());

let teacher1 = new User("Dean", "dean@college.com");
console.log(teacher1.viewData());