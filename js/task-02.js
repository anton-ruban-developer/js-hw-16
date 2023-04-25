const students = [
  { name: "Anton", age: 34, gender: "male" },
  { name: "Sergey", age: 29, gender: "male" },
  { name: "Pasha", age: 30, gender: "male" },
  { name: "Victor", age: 40, gender: "male" },
  { name: "Bogdan", age: 17, gender: "male" },
  { name: "Alexandra", age: 18, gender: "female" },
  { name: "Olga", age: 18, gender: "female" },
];

const getInfo = students.filter((student) => student.gender === "female");
console.log(getInfo);

// Второй способ:

const getInfo1 = (students, gender) => {
  return students
    .filter((student) => student.gender === gender)
    .map((student) => student.name);
};
console.log(getInfo1(students, "female"));
