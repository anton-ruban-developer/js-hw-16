const students = [
  { name: "Anton", age: 34 },
  { name: "Sergey", age: 29 },
  { name: "Pasha", age: 30 },
  { name: "Victor", age: 40 },
  { name: "Bogdan", age: 17 },
  { name: "Alexandra", age: 17 },
  { name: "Olga", age: 17 },
];

const seniors = students.filter((student) => student.age >= 18);
console.log(seniors);