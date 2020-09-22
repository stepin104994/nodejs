function getArray(items) {
    return new Array().concat(items);
}
var genNumArr = getArray([100, 200, 300]);
var genStrArr = getArray(["Hello", "World"]);
genNumArr.push(400); // OK
genStrArr.push("Hello TypeScript"); // OK
//genNumArr.push("Hi"); // compiler error
//genStrArr.push(500); // compilererror
console.log(genNumArr);
console.log(genStrArr);
