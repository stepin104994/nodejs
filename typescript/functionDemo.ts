function calSum1(n1:number,n2:number):number{
    return(n1+n2);
}
console.log(calSum1(10,20))
function greet(name:string):void{
    console.log('greet day'+name);
}
greet('nithya')
let greetStudent=function(name:string):string{
    return 'good day'+name;
}
console.log(greetStudent('sandhya'));
let sum=(n1:number,n2:number)=>{
    console.log('sum...'+(n1+n2));
}