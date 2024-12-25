const list = [1, 85, 351, 86, 5135, 486, 64, 684, 156, 81, 65, 10];

console.log("For loop logs");
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

console.log("Foreach loop logs");
list.forEach((item) => {
  console.log(item);
});

const newList = [];

list.forEach((item) => {
  newList.push(item + 5);
});

console.log(newList);

// Map
// Update the items of the list
console.log("Map logs");

// const mapList = list.map((item) => {
//   return item + 5;
// });

const mapList = list.map((item) => item + 5);

console.log(mapList);

const users = [
  { name: "ram", surname: "nepal" },
  { name: "mohan", surname: "acharya" },
  { name: "sita", surname: "kc" },
];

const fullNamedUsers = users.map((item) => {
  return {
    name: item.name,
    surname: item.surname,
    fullName: `${item.name} ${item.surname}`,
  };
});

console.log(fullNamedUsers);

// Filters
// Filter even number
console.log("Filter logs");
// const filteredList = list.filter((item) => {
//   return item % 2 == 0;
// });

const filteredList = list.filter((item) => item % 2 == 0);

console.log(filteredList);

// Sort
// ascending order => a-b
console.log("Sort logs");
list.sort((a, b) => a - b);

console.log(list);

// descending order => b-a
list.sort((a, b) => b - a);

console.log(list);

// Reduce
console.log("Reduce logs");
// const totalSum = list.reduce((acc, item) => {
//   return (acc = acc + item);
// }, 0);

const totalSum = list.reduce((acc, item) => (acc += item), 0);

console.log(totalSum);

// Find
const found = users.find((item) => item.name == "ram");
console.log(found);

// Some

// Every

// Includes

