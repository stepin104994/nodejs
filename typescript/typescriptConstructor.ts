class Mystudent{
    constructor(public name:string,
        public mobile:number,
        public city?:string,
        public company:string="ABC",
        public age?:number){ }

    printDetails=(...hobbies:string[])=>{
        console.log(`${this.name} is from ${this.city}`);
        console.log(`${this.age}`);
        console.log(hobbies);
    }
}

const stud:Mystudent=new Mystudent('Raju',1290,'bangalore','DEF',20);
stud.printDetails('Sports','Music');
const stud1:Mystudent=new Mystudent('Ram',1290,'','',25);
stud.printDetails();