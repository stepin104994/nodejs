var Mystudent = /** @class */ (function () {
    function Mystudent(name, mobile, city, company, age) {
        var _this = this;
        if (company === void 0) { company = "ABC"; }
        this.name = name;
        this.mobile = mobile;
        this.city = city;
        this.company = company;
        this.age = age;
        this.printDetails = function () {
            var hobbies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                hobbies[_i] = arguments[_i];
            }
            console.log(_this.name + " is from " + _this.city);
            console.log("" + _this.age);
            console.log(hobbies);
        };
    }
    return Mystudent;
}());
var stud = new Mystudent('Raju', 1290, 'bangalore', 'DEF', 20);
stud.printDetails('Sports', 'Music');
var stud1 = new Mystudent('Ram', 1290, '', '', 25);
stud.printDetails();
