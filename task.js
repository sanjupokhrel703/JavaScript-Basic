const taskList = document.getElementById("taskList");

const tasks = [];

const savedTasksRaw = localStorage.getItem("tasks");

console.log(savedTasksRaw);

const savedTasks = JSON.parse(savedTasksRaw) ?? [];

console.log(savedTasks);

// for (let i = 0; i < savedTasks.length; i++) {
//   const taskListItem = document.createElement("li");
//   taskListItem.innerText = savedTasks[i];

//   taskList.appendChild(taskListItem);
// }

tasks.push(...savedTasks);

tasks.forEach((item) => {
  const taskListItem = document.createElement("li");
  taskListItem.innerHTML = `<b>${item}</b>`;

  taskList.appendChild(taskListItem);
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

// taskInput.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

addTaskBtn.addEventListener("click", () => {
  //   console.log(taskInput.value);

  const taskListItem = document.createElement("li");
  taskListItem.innerHTML = `<b>${taskInput.value}</b>`;

  // taskListItem.style.textTransform = "capitalize";
  // taskListItem.style.color = "green";

  taskList.appendChild(taskListItem);

  tasks.push(taskInput.value);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
});
