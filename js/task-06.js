const dailyTasks = [
  { description: "to make a bed", completed: true },
  { description: "to wash up", completed: true },
  { description: "to make 20 push ups", completed: true },
  { description: "to make 20 pull ups", completed: true },
  { description: "to ride a bycicle", completed: false },
  { description: "to have a breakfast", completed: false },
  { description: "to practise javaScript", completed: false },
  { description: "to read new material", completed: false },
  { description: "to complete all homework", completed: false },
  { description: "to type javaScript's code", completed: false },
];

const completedTasks = dailyTasks.filter(
  (dailyTask) => dailyTask.completed === true
);
console.log(completedTasks);

const incompletedTasks = dailyTasks.filter(
  (dailyTask) => dailyTask.completed === false
);
console.log(incompletedTasks);

const myTasks = dailyTasks.map((task) => {
  if (task.completed) {
    return `${task.description} - Completed`;
  } else {
    return `${task.description} - Incompleted`;
  }
});
console.log(myTasks);