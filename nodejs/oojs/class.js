function Student(name,city){
    this.name=name;
    this.city=city;
    this.getDetails=function(){
        console.log('welcome',this.name,this.city)
    }
}
var stud=new Student('raju','bang');
console.log(stud);
stud.getDetails();
var stud1=new Student('rohan','mysore');
console.log(stud1);
stud1.getDetails();

Student.prototype.studId=90;
Student.prototype.greetMessage=(username)=>{
    console.log('greet day',username);
}
stud.greetMessage('nithya');