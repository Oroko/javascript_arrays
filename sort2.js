const users = [
  { name: "Amir", age: 49 },
  { name: "Betty", age: 30 },
];

console.log(users.sort((a, b) => a.age - b.age).map((user) => user.name));
