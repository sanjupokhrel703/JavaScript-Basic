// function
// function is a piece of code to do specific tasks
// syntax
/**
 * function functionName (parameters) {
 *  // code
 * }
 */

// parameter
function cube(value) {
  const result = value * value * value;

  console.log(result);
}

cube(3); // argument
cube(6);
cube(10);

function sayHello() {
  console.log("Hello welcome to js class");
}

sayHello();

function sum(a, b = 5) {
  const result = a + b;

  console.log(result);
}

sum(5);
sum(10, 6);
sum(5863, 45613);

function greet(name = "john") {
  console.log("Hello " + name);
}

greet();
