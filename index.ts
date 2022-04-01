// string declaration
const a: string = "Hello world";

// string, number, array, null, undefind, boolean, never, unknown
// any

function getLowerCase(str: string) {
  return str.toLowerCase();
}

console.log(getLowerCase("HGYFWTWTTWTW"));
console.log(getLowerCase("Hello World"));

// number declaration
const b: number = 23456;

// sum
function add(number1: number, number2: number): number {
  return number1 + number2;
}

// arrow function
const substract = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(5, 3));
console.log(substract(5, 3));
