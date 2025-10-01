let prompt = require("prompt-sync")();

class RailwayTicket{
    constructor(){
        this.name = "";
        this.coach = "";
        this.mob_no = "";
        this.amt = 0.0;
        this.total_amt = 0.0;
    }

    accept(){
        this.name = prompt("Enter your name : ");
        this.coach = prompt("Enter your coach => First-AC , Second-AC, Third-AC, Sleeper : ");
        this.mob_no = prompt("Enter your Mob No : ");
        this.amt = Number(prompt("Enter your Amount : "));
    }

    update(){
        const coachType = this.coach.toLowerCase();
        
        if(coachType === "first-ac"){
            this.total_amt = this.amt + 700;
        } else if(coachType === "second-ac"){
            this.total_amt = this.amt + 500;
        } else if(coachType === "third-ac"){
            this.total_amt = this.amt + 250;
        } else if(coachType === "sleeper"){
            this.total_amt = this.amt;
        } else {
            this.total_amt = this.amt;
            console.log("Invalid coach type. Using base amount.");
        }
    }

    display(){
        console.log("=====================================");
        console.log("NAME : " + this.name);
        console.log("COACH : "+this.coach);
        console.log("MOBILE NUMBER : "+this.mob_no);
        console.log("TOTAL AMOUNT : "+this.total_amt);
        console.log("=====================================");
    }
}

let newPassenger = new RailwayTicket();

newPassenger.accept();
newPassenger.update();
newPassenger.display();