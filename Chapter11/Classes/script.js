class ToyotaCar {
    constructor(brand, mileage){
        this.brand = brand;
        this.mileage = mileage;
    }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}
let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);

let xyz = new ToyotaCar();
console.log(xyz);