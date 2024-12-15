let DATA = "Secret Information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", DATA);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Some new value";
  }
}
let adminObj = new Admin("admin", "admin@college.com");
console.log(adminObj);
adminObj.editData();
console.log(DATA);
