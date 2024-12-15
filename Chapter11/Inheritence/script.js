class Parent{
    hello(){
        console.log("Hello");
    }
}
class Child extends Parent{
    hi(){
        console.log("Hi");
    }
}

let obj = new Child();

console.log("Child Object :",obj);
obj.hello();
obj.hi();