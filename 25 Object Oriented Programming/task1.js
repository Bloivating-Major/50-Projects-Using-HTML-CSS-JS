let prompt = require("prompt-sync")();

class CabService {
  constructor() {
    (this.car_type = ""), (this.km = 0.0), (this.bill = 0.0);
  }

  accept() {
    this.car_type = prompt("Enter a car type AC/ Non-AC : ");
    this.km = Number(prompt("Enter km travelled : "));
  }

  calculate() {
    if (this.car_type === "AC") {
      if (this.km <= 5) {
        this.bill = 150;
      } else {
        this.bill = 150 + (this.km - 5) * 10;
      }
    } else if (this.car_type === "Non-AC") {
      if (this.km <= 5) {
        this.bill = 120;
      } else {
        this.bill = 120 + (this.km - 5) * 8;
      }
    }
  }

  display(){
    console.log("CAR TYPE :  "+ this.car_type);
    console.log("KILOMETER TRAVELLED : "+ this.km);
    console.log("TOTAL BILL : ₹"+this.bill);
  }
}

let user1 = new CabService();

user1.accept();
user1.calculate();
user1.display();
