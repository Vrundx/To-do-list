const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="deleteBtn">Delete</button>
    `;

    li.querySelector("span").addEventListener("click", function(){
        this.classList.toggle("completed");
    });

    li.querySelector("button").addEventListener("click", function(){
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
}