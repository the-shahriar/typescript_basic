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

// array declarations

// generic array
const array: Array<number | string> = [12, 133, "Tamim"];

// normal
const arr: number[] = [12, 133, 454];
const arr2: string[] = ["odif", "vvv", "jggfd"];

// type notation
type numberAndString = number | string;
const id: numberAndString = 122;

/* -------Interface-------------  */
interface IPerson {
  name: string;
  age: number;
  hobby?: string;
}

// examples
const person: IPerson = {
  name: "Tamim",
  age: 22,
  hobby: "Programming",
};

const person2: IPerson = {
  name: "Mezba",
  age: 25,
};

/* --------------enums------------- */
enum Color {
  color1 = "#ededed",
  color2 = "#eededh",
  color3 = "#dddddd",
}

console.log(Color.color2);

/* ------------Generic-------------- */
// to declare type when function called

function _concat<T extends string | number>(
  a: T,
  b: T
): T extends string ? string : number {
  return <any>a + <any>b;
}

_concat(1, 3);
_concat("Shahriar", "Islam");
_concat("Shahriar", "Islam");
