// JSON - JavaScript Object Notation

const users = [
  { name: "ram", surname: "nepal" },
  { name: "mohan", surname: "acharya" },
  { name: "sita", surname: "kc", phoneNumbers: [9780798, 7209348] },
];

// Convert JS objects to JSON
const jsonUsers = JSON.stringify(users);

// Convert JSON data back to JS objects
JSON.parse(jsonUsers);
