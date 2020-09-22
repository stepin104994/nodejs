// function sum(...args:number[]){
//     var count=0;
//     for(let i in args){
//         count+=args[i];
//     }
// console.log(count);
// }
// sum(...[10,20,30]);
function sumOfNums(...nums:number[]){
    var sum=0;
    nums.forEach((ele)=>{
        sum+=ele;
    });
    console.log(sum);
}
sumOfNums(...[10,30,70]);