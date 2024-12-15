// Student object
const student = {
  fullName: "Shradha Khapra",
  marks: 94.4,
  printMarks: function () {
    console.log("Marks =", this.marks);
  },
};
console.log(student.printMarks());

// Employee object
const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
  // 2nd way to write
  calcTax2: function () {
    console.log("Tax rate is 10%");
  },
};
const karanArjun = {
  salary: 40000,
};
// If u wanna use any object function is set to prototype of another object.
karanArjun.__proto__ = employee;
console.log("Object :", karanArjun);
console.log(karanArjun.calcTax());

const karanArjun2 = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 20%");
  },
};
karanArjun2.__proto__ = employee;
console.log("Object :", karanArjun2);
console.log(karanArjun2.calcTax());