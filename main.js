let mainDiv = document.querySelector(".container");
let form = document.querySelector(".form");
let btn = document.querySelector(".add");
let input = document.querySelector(".input");
let tasksDiv = document.querySelector(".tasks");

let arr = window.localStorage.getItem("tasks")
  ? JSON.parse(window.localStorage.getItem("tasks"))
  : [];

function createTaskElement(task, index) {
  let div = document.createElement("div");
  let button = document.createElement("button");
  let paragraph = document.createElement("p");
  
  div.className = "textp";
  button.className = "button";
  paragraph.className = "pname";
  
  div.style.cssText =
    "display: flex; justify-content: space-between; margin: 8px; padding: 5px; background-color: white;";
  button.style.cssText =
    "margin: 8px; padding: 5px; color: white; background-color: red; border: 0.5px solid gray; border-radius: 10px; cursor: pointer;";
  paragraph.style.cssText = "margin: 8px; padding: 5px;";
  
  paragraph.textContent = task;
  button.textContent = "Delete";
  
  div.appendChild(paragraph);
  div.appendChild(button);
  tasksDiv.appendChild(div);

  button.addEventListener("click", function () {
    div.remove();
    arr.splice(index, 1);
    window.localStorage.setItem("tasks", JSON.stringify(arr));
  });
}

arr.forEach((task, index) => {
  createTaskElement(task, index);
});

btn.onclick = function () {
  if (input.value !== "") {
    let task = input.value;
    arr.push(task);
    window.localStorage.setItem("tasks", JSON.stringify(arr));

    createTaskElement(task, arr.length - 1);
    input.value = "";
  }
};
