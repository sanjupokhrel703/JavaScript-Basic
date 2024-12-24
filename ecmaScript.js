// Destructuring
// 1. Object destructuring
const person = {
  name: "hari",
  address: "ktm",
  age: 25,
  phone: 8946510,
  fatherName: "mohan",
};

const person2 = {
  name: "hari",
  address: "ktm",
  age: 25,
  phone: 8946510,
  fatherName: "mohan",
};

// console.log(person.name);
// console.log(person.age);

const {
  address: person1Address,
  age,
  phone,
  fatherName,
  name: person1Name,
} = person;

console.log(person1Name);
console.log(fatherName);

// 2. Array destructuring
const user = ["sita", "bajaj", 256, 864653135];

const [herName, someNumber, someName] = user;

console.log(herName);
console.log(someName);
console.log(someNumber);

// Spread operator
const list1 = ["ram", "hari", "sita"];
const list2 = ["mohan", "rohan", "ramesh"];
const list3 = [...list1, ...list2];

// list3.push(...list1);
// list3.push(...list2);

console.log(list3);

const data1 = {
  name: "ram",
  age: 20,
};

const data2 = {
  address: "butwal",
  phone: 987465120320,
};

const data3 = { ...data1, ...data2 };
console.log(data3);

// Template literals
const name = "roshan";
const address = "pokhara";

const mySentence = "Hello my name is " + name + " and i am from " + address;
console.log(mySentence);

const newSentence = `Hello my name is ${name} and i am from ${address}`;
console.log(newSentence);

const text = `asdfasdfasdf
asdfasdfasdf
asdfasdfas
dfasdf
asdf  ${name}
asdf
asfd
asdf `;

// method 1
function square(a) {
  return a * a;
}

const result = square(8);
console.log(result);

/**
 * const functionName = (params) => {}
 */
// Method 2
// Arrow function
const square = (a) => {
  return a * a;
};

const square = (a) => a * a;
