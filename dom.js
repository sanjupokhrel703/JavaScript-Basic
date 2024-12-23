// DOM - Document object model
const element = document.getElementById("container");
console.log(element);

element.innerText = "This text is coming from js";
element.style.color = "red";
element.style.background = "#ffeeff";
element.style.padding = 30;

element.addEventListener("mouseover", () => {
  element.innerText = "This text changed due to mouse over";
  element.style.color = "blue";
  element.style.background = "#ffeeee";
});

element.addEventListener("mouseleave", () => {
  element.innerText = "This text changed due to mouse leave";
  element.style.color = "grey";
  element.style.background = "#ffffee";
});

const button = document.querySelector("#btn");
console.log(button);

button.addEventListener("click", () => {
  element.style.color = "green";
  element.style.background = "#eeffee";
  element.innerText = "Button is clicked";
});

const list = document.getElementById("list");

const names = ["ram", "hari", "sita", "gita", "rohan"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];

  const listItem = document.createElement("li");

  listItem.textContent = name;

  list.appendChild(listItem);
}
