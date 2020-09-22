// function sum(...args:number[]){
//     var count=0;
//     for(let i in args){
//         count+=args[i];
//     }
// console.log(count);
// }
// sum(...[10,20,30]);
function sumOfNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (ele) {
        sum += ele;
    });
    console.log(sum);
}
sumOfNums.apply(void 0, [10, 30, 70]);
