// Calculator
function add(num1, num2){
    console.log("Addition of",num1,num2,":",num1+num2);
}
function sub(num1, num2){
    console.log("Substraction of",num1,num2,":",num1-num2);
}
function mul(num1, num2){
    console.log("Multiplication of",num1,num2,":",num1*num2);
}
function div(num1, num2){
    console.log("Division of",num1,num2,":",num1/num2);
}

add(8, 3);
sub(8, 3);
mul(8, 3);
div(8, 3);

function msgFunction(msg){ 
    return "I Love "+msg;
}
let message = msgFunction("JavaScript");
console.log(message);