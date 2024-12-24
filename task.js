const taskList = document.getElementById("taskList");

const tasks = ["Wash clothes", "Clean floor", "Shower", "Clean bike"];

for (let i = 0; i < tasks.length; i++) {
  const taskListItem = document.createElement("li");
  taskListItem.innerText = tasks[i];

  taskList.appendChild(taskListItem);
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

// taskInput.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

addTaskBtn.addEventListener("click", () => {
  //   console.log(taskInput.value);

  const taskListItem = document.createElement("li");
  taskListItem.innerText = taskInput.value;

  taskListItem.style.textTransform = "capitalize";
  taskListItem.style.color = "green";

  taskList.appendChild(taskListItem);

  taskInput.value = "";
});
