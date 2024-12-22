// print command
console.log("hello mary");

console.error("this is error");

console.warn("warning");

/**
 * Variables: Memory element
 * let, const, var
 *
 * syntax: var/let/const variableName = value
 */

var value = 5;

var sum = value + 10;

var sum = 8;

console.log(sum);

/**
 * Const: cannot be redeclared, value cannot be set twice
 */
const name = "ram"; //text or string

/**
 * Let: value can be set any number of times
 */
let address = "ktm";
address = "pokhara";
address = "butwal";

console.log(address);

var course = "js";

var course = "react";

/**
 * Data types
 * JS - dynamically typed
 */

let myValue = "ram"; // this is comment

myValue = "hari"; // string or text

myValue = 5; // number

myValue = true; // boolean : true or false

myValue = 10.8;

console.log(myValue);

/**
 * 1. Text or string
 * use single ' '  or double " " inverted comma
 */
const myText = "asdfasdf";
console.log(myText);

/**
 * 2. Number
 * with decimal, positive negative
 */
let myNumber = 5;
myNumber = 0.336366521;
myNumber = -2005233.023653;

/**
 * 3. Boolean: true or false
 */
const myBoolean = false; // or true

/**
 * 4. Object
 * multiple values can be stored
 * key <-> value pair
 *
 * {
 *  key : value
 * }
 */
const myObject = {
  name: "ram",
  address: "Ktm",
  phone: 98763543210,
  isTeenager: true,
  age: 18,
};

console.log(myObject["phone"]);
console.log(myObject.phone);

/**
 * 5. Array
 * multiple values can be stored
 * stored in position or list
 * Array's position starts from 0
 */
const myArray = ["ram", "hari", "sita", 1, 2.036552, true];

console.log(myArray[5]);
