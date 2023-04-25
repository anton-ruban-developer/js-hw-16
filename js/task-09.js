const students = [
  { name: "Anton", grades: [12, 12, 12, 12, 12] },
  { name: "Sergey", grades: [12, 12, 12, 12, 12] },
  { name: "Pasha", grades: [12, 12, 12, 11, 12] },
  { name: "Victor", grades: [12, 11, 12, 11, 12] },
  { name: "Max", grades: [12, 11, 10, 9, 8] },
];

function getAverageGrade(grades) {
  const sum = grades.reduce((acc, curr) => acc + curr);
  return sum / grades.length;
}

students.forEach((student) => {
  const averageGrade = getAverageGrade(student.grades);
  console.log(`${student.name}: ${averageGrade} points`);
});
