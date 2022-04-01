// string declaration
var a = "Hello world";
// string, number, array, null, undefind, boolean, never, unknown
// any
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("HGYFWTWTTWTW"));
console.log(getLowerCase("Hello World"));
// number declaration
var b = 23456;
// sum
function add(number1, number2) {
    return number1 + number2;
}
// arrow function
var substract = function (num1, num2) {
    return num1 + num2;
};
console.log(add(5, 3));
console.log(substract(5, 3));
// array declarations
// generic array
var array = [12, 133, "Tamim"];
// normal
var arr = [12, 133, 454];
var arr2 = ["odif", "vvv", "jggfd"];
var id = 122;
// examples
var person = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
};
var person2 = {
    name: "Mezba",
    age: 25
};
/* --------------enums------------- */
var Color;
(function (Color) {
    Color["color1"] = "#ededed";
    Color["color2"] = "#eededh";
    Color["color3"] = "#dddddd";
})(Color || (Color = {}));
console.log(Color.color2);
/* ------------Generic-------------- */
// to declare type when function called
function _concat(a, b) {
    return a + b;
}
_concat(1, 3);
_concat("Shahriar", "Islam");
_concat("Shahriar", "Islam");
