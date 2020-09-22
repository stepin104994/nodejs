var alpha=new Array('a','b','c','d');
alpha[10]='m';
console.log(alpha[7]);
console.log(alpha.length);


//destructuring
var nums:number[]=[10,20];
var[a,b]=nums;
var[a,b,c]=nums;
var[m]=nums;
console.log(a);
console.log(b);
console.log(c);
console.log(m);