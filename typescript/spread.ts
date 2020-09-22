var arr1:number[]=[1,2,3];
var arr2:number[]=[4,5,6];
var arr3:number[]=[...arr1,...arr2]
arr3.forEach((ele)=>{
    console.log(ele);
});

var student={name:'Raj',age:20};
var employee={...student,salary:10000};
console.log(employee);