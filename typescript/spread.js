var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArrays(arr1, arr2);
arr3.forEach(function (ele) {
    console.log(ele);
});
var student = { name: 'Raj', age: 20 };
var employee = __assign(__assign({}, student), { salary: 10000 });
console.log(employee);
