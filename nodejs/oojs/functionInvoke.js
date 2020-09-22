// function calculate(x,y,z){
//    function sum(){
//        return x+y+z;
//    }
//    var result  = sum()/3;
//    return result;
// }
// console.log(calculate(30,60,90));
// function calculate(x,y,z){
//     var sum = function (){
//         return x+y+z;
//     }
//     var result  = sum()/3;
//     return result;
//  }
//  console.log(calculate(30,60,90));

// function calculate(x,y,z){
//     // var sum = 
//    // var result  = 
//     return function (){
//         return x+y+z;
//     }()/3;;
//  }
//  console.log(calculate(30,60,90));

// function printData(name,city){
//     var show =function(){
//         console.log(name+" "+city);
//     }
//     return show();
// }
// printData('Priya','Ban');

// function printMyData(name,city){
//     return function(){
//         console.log(name+" "+city);
//     };
// }
// var result = printMyData('Priya','Ban');
// result();



// function printBonus(sal){
//     console.log('Bonus Calculation');
//     var bonus = function(amount){
//         console.log(sal*amount);
//     };
//     return bonus(300);
// }
// printBonus(2000);


// function printBonus(sal){
//     console.log('Bonus Calculation');
//        return function(amount){
//         console.log(sal*amount);
//     };
// }
// var bonus = printBonus(2000);
// bonus(900);
// printBonus(2000)(80);

// var name="nithya"
// register(name);
// function register(uname){
//     function validate(uname)
//     {
//         var length=uname.length();
//         if(lenght<3)
//         return false;
//         else return true;
//     }();
// }

// for (const val of "javascript"){
//     console.log(val);
// }

// sumfun=(...args)=>{
//     let sum = 0;
//     for(let i in args)
//     sum+=args[i];
//     console.log(sum);    
// }
// sumfun();
// sumfun(10,20);
// sumfun(10,20,30);

// fun=function(a,b,...args)
// {
//     console.log("a",a);
//     console.log("b",b);
//     console.log(args);
// }
// fun(1,2,"hello",900);
// fun(1);

function sumNumbers(...args)
{
    return args.filter(n=>typeof n=='number').reduce((previous,current)=>previous+current);
}
console.log(sumNumbers(30,null,40,undefined,60,'30BC'))
console.log(sumNumbers(30,null,40,undefined,60,parseInt('30BC')))

